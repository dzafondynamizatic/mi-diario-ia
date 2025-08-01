#!/usr/bin/env node

/**
 * Script para generar estadísticas detalladas del blog
 */

const fs = require('fs');
const path = require('path');

console.log('📊 Generando estadísticas del blog...');

// Cargar artículos
const articlesDataPath = './js/articles-data.js';
if (!fs.existsSync(articlesDataPath)) {
  console.error('❌ No se encontró js/articles-data.js');
  process.exit(1);
}

const articlesContent = fs.readFileSync(articlesDataPath, 'utf8');
eval(articlesContent);

if (!articlesData || !Array.isArray(articlesData)) {
  console.error('❌ articlesData no es válido');
  process.exit(1);
}

// Funciones de análisis
function analyzeContent(articles) {
  const totalWords = articles.reduce((sum, article) => {
    const wordCount = article.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return sum + wordCount;
  }, 0);

  const contentLengths = articles.map(article => 
    article.content.replace(/<[^>]*>/g, '').length
  );

  return {
    totalWords,
    averageWords: Math.round(totalWords / articles.length),
    shortestContent: Math.min(...contentLengths),
    longestContent: Math.max(...contentLengths),
    averageContentLength: Math.round(contentLengths.reduce((a, b) => a + b, 0) / contentLengths.length)
  };
}

function analyzeReadTime(articles) {
  const readTimes = articles.map(article => parseInt(article.readTime) || 0);
  
  return {
    totalReadTime: readTimes.reduce((a, b) => a + b, 0),
    averageReadTime: Math.round(readTimes.reduce((a, b) => a + b, 0) / readTimes.length),
    shortestRead: Math.min(...readTimes),
    longestRead: Math.max(...readTimes),
    distribution: {
      quick: readTimes.filter(t => t <= 5).length, // <= 5 min
      medium: readTimes.filter(t => t > 5 && t <= 15).length, // 5-15 min
      long: readTimes.filter(t => t > 15).length // > 15 min
    }
  };
}

function analyzeTags(articles) {
  const allTags = articles.flatMap(a => a.tags);
  const tagFrequency = {};
  
  allTags.forEach(tag => {
    tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
  });

  const sortedTags = Object.entries(tagFrequency)
    .sort(([,a], [,b]) => b - a);

  return {
    totalTags: Object.keys(tagFrequency).length,
    totalTagUsage: allTags.length,
    averageTagsPerArticle: Math.round(allTags.length / articles.length),
    mostUsedTags: sortedTags.slice(0, 10),
    leastUsedTags: sortedTags.filter(([,count]) => count === 1),
    tagFrequency,
    tagCloud: sortedTags
  };
}

function analyzeDates(articles) {
  const dates = articles.map(a => new Date(a.date)).sort((a, b) => a - b);
  const firstPost = dates[0];
  const lastPost = dates[dates.length - 1];
  const daysBetween = (lastPost - firstPost) / (1000 * 60 * 60 * 24);

  // Analizar frecuencia por mes
  const monthlyFrequency = {};
  dates.forEach(date => {
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyFrequency[monthKey] = (monthlyFrequency[monthKey] || 0) + 1;
  });

  return {
    firstPost: firstPost.toISOString().split('T')[0],
    lastPost: lastPost.toISOString().split('T')[0],
    daysBetween: Math.round(daysBetween),
    averagePostsPerMonth: Math.round((articles.length / (daysBetween / 30)) * 10) / 10,
    monthlyFrequency
  };
}

function analyzeAuthors(articles) {
  const authorFrequency = {};
  
  articles.forEach(article => {
    authorFrequency[article.author] = (authorFrequency[article.author] || 0) + 1;
  });

  return {
    totalAuthors: Object.keys(authorFrequency).length,
    authorFrequency,
    mostActiveAuthor: Object.entries(authorFrequency)
      .sort(([,a], [,b]) => b - a)[0]
  };
}

// Generar estadísticas
const stats = {
  meta: {
    generatedAt: new Date().toISOString(),
    totalArticles: articlesData.length,
    blogTitle: "Mi Diario de IA",
    version: "1.0.0"
  },
  
  content: analyzeContent(articlesData),
  readTime: analyzeReadTime(articlesData),
  tags: analyzeTags(articlesData),
  dates: analyzeDates(articlesData),
  authors: analyzeAuthors(articlesData),
  
  // Análisis de calidad
  quality: {
    articlesWithImages: articlesData.filter(a => a.image && a.image !== '').length,
    articlesWithTags: articlesData.filter(a => a.tags && a.tags.length > 0).length,
    averageExcerptLength: Math.round(
      articlesData.reduce((sum, a) => sum + (a.excerpt ? a.excerpt.length : 0), 0) / articlesData.length
    ),
    contentQualityScore: Math.round(
      (articlesData.filter(a => a.content && a.content.length > 1000).length / articlesData.length) * 100
    )
  },

  // Top articles (por longitud de contenido)
  topArticles: {
    byLength: articlesData
      .map(a => ({
        id: a.id,
        title: a.title,
        contentLength: a.content.replace(/<[^>]*>/g, '').length,
        readTime: a.readTime
      }))
      .sort((a, b) => b.contentLength - a.contentLength)
      .slice(0, 5),
    
    byTags: articlesData
      .map(a => ({
        id: a.id,
        title: a.title,
        tagCount: a.tags ? a.tags.length : 0,
        tags: a.tags
      }))
      .sort((a, b) => b.tagCount - a.tagCount)
      .slice(0, 5)
  }
};

// Guardar estadísticas
fs.writeFileSync('./stats.json', JSON.stringify(stats, null, 2), 'utf8');

// Mostrar resumen en consola
console.log('\n📊 Estadísticas del Blog:');
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📄 Total de artículos: ${stats.meta.totalArticles}`);
console.log(`📝 Palabras totales: ${stats.content.totalWords.toLocaleString()}`);
console.log(`📖 Promedio de palabras por artículo: ${stats.content.averageWords}`);
console.log(`⏱️  Tiempo total de lectura: ${stats.readTime.totalReadTime} minutos`);
console.log(`🏷️  Total de tags únicos: ${stats.tags.totalTags}`);
console.log(`👤 Autores: ${stats.authors.totalAuthors}`);
console.log(`📅 Rango de fechas: ${stats.dates.firstPost} → ${stats.dates.lastPost}`);
console.log(`📈 Artículos por mes (promedio): ${stats.dates.averagePostsPerMonth}`);

console.log('\n🏷️  Top 5 Tags más usados:');
stats.tags.mostUsedTags.slice(0, 5).forEach(([tag, count]) => {
  console.log(`   ${tag}: ${count} artículo${count > 1 ? 's' : ''}`);
});

console.log('\n📊 Distribución por tiempo de lectura:');
console.log(`   📖 Lectura rápida (≤5 min): ${stats.readTime.distribution.quick} artículos`);
console.log(`   📘 Lectura media (5-15 min): ${stats.readTime.distribution.medium} artículos`);
console.log(`   📚 Lectura larga (>15 min): ${stats.readTime.distribution.long} artículos`);

console.log('\n🎯 Indicadores de calidad:');
console.log(`   ✅ Artículos con imágenes: ${stats.quality.articlesWithImages}/${stats.meta.totalArticles}`);
console.log(`   🏷️  Artículos con tags: ${stats.quality.articlesWithTags}/${stats.meta.totalArticles}`);
console.log(`   📏 Promedio longitud excerpt: ${stats.quality.averageExcerptLength} caracteres`);
console.log(`   📊 Score de calidad de contenido: ${stats.quality.contentQualityScore}%`);

console.log('\n📈 Top 3 artículos por longitud:');
stats.topArticles.byLength.slice(0, 3).forEach((article, index) => {
  console.log(`   ${index + 1}. "${article.title}" (${article.contentLength.toLocaleString()} caracteres)`);
});

console.log('\n✅ Estadísticas guardadas en stats.json');
console.log(`🕒 Generado: ${new Date().toLocaleString('es-ES')}`);

// Crear badge de estadísticas para README
const badge = {
  schemaVersion: 1,
  label: "artículos",
  message: stats.meta.totalArticles.toString(),
  color: "blue"
};

fs.writeFileSync('./badge.json', JSON.stringify(badge), 'utf8');
console.log('🏆 Badge de estadísticas creado: badge.json');
