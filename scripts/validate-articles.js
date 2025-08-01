#!/usr/bin/env node

/**
 * Script para validar artículos del blog
 * Verifica estructura, contenido y metadatos
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Iniciando validación de artículos...');

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

console.log(`📄 Validando ${articlesData.length} artículos...\n`);

let errors = 0;
let warnings = 0;

// Campos requeridos
const requiredFields = ['id', 'title', 'excerpt', 'content', 'image', 'date', 'author', 'tags', 'readTime'];

// Función para validar URL/slug
function isValidSlug(text) {
  return /^[a-z0-9-]+$/.test(text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'));
}

// Función para validar fecha
function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.getFullYear() >= 2020;
}

// Función para validar HTML básico
function validateHTML(content) {
  const issues = [];
  
  // Verificar que no haya HTML malformado básico
  const unclosedTags = content.match(/<[^/>]*[^/]>/g) || [];
  const closedTags = content.match(/<\/[^>]*>/g) || [];
  
  if (Math.abs(unclosedTags.length - closedTags.length) > 5) {
    issues.push('Posible HTML malformado (tags no balanceados)');
  }
  
  // Verificar imágenes sin alt
  if (content.includes('<img') && !content.includes('alt=')) {
    issues.push('Imágenes sin atributo alt');
  }
  
  // Verificar enlaces externos sin target
  const externalLinks = content.match(/href="http[^"]*"/g) || [];
  if (externalLinks.length > 0 && !content.includes('target="_blank"')) {
    issues.push('Enlaces externos sin target="_blank"');
  }
  
  return issues;
}

articlesData.forEach((article, index) => {
  console.log(`📝 Validando artículo ${index + 1}: "${article.title}"`);
  
  const articleErrors = [];
  const articleWarnings = [];
  
  // Validar campos requeridos
  requiredFields.forEach(field => {
    if (!article[field]) {
      articleErrors.push(`Campo requerido faltante: ${field}`);
    }
  });
  
  if (article.title) {
    // Validar título
    if (article.title.length < 10) {
      articleWarnings.push('Título muy corto (< 10 caracteres)');
    }
    if (article.title.length > 100) {
      articleWarnings.push('Título muy largo (> 100 caracteres)');
    }
    
    // Validar que el título genere un slug válido
    const slug = article.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    if (!isValidSlug(slug)) {
      articleWarnings.push('Título no genera un slug válido para URL');
    }
  }
  
  // Validar excerpt
  if (article.excerpt) {
    if (article.excerpt.length < 50) {
      articleWarnings.push('Excerpt muy corto (< 50 caracteres)');
    }
    if (article.excerpt.length > 300) {
      articleWarnings.push('Excerpt muy largo (> 300 caracteres)');
    }
  }
  
  // Validar contenido
  if (article.content) {
    if (article.content.length < 500) {
      articleWarnings.push('Contenido muy corto (< 500 caracteres)');
    }
    
    // Validar HTML del contenido
    const htmlIssues = validateHTML(article.content);
    articleWarnings.push(...htmlIssues);
    
    // Verificar estructura del contenido
    if (!article.content.includes('<h2>') && !article.content.includes('<h3>')) {
      articleWarnings.push('Contenido sin estructura de encabezados (h2, h3)');
    }
    
    // Verificar párrafos
    const paragraphs = (article.content.match(/<p>/g) || []).length;
    if (paragraphs < 3) {
      articleWarnings.push('Pocos párrafos en el contenido (< 3)');
    }
  }
  
  // Validar fecha
  if (article.date && !isValidDate(article.date)) {
    articleErrors.push('Fecha inválida');
  }
  
  // Validar tags
  if (article.tags) {
    if (!Array.isArray(article.tags)) {
      articleErrors.push('Tags debe ser un array');
    } else {
      if (article.tags.length === 0) {
        articleWarnings.push('Artículo sin tags');
      }
      if (article.tags.length > 10) {
        articleWarnings.push('Demasiados tags (> 10)');
      }
      
      // Verificar formato de tags
      article.tags.forEach(tag => {
        if (typeof tag !== 'string' || tag.trim() === '') {
          articleErrors.push(`Tag inválido: "${tag}"`);
        }
        if (tag.includes(' ') && !tag.includes('-')) {
          articleWarnings.push(`Tag con espacios: "${tag}" (considera usar guiones)`);
        }
      });
    }
  }
  
  // Validar readTime
  if (article.readTime) {
    if (!article.readTime.includes('min')) {
      articleWarnings.push('readTime debe incluir "min"');
    }
    const minutes = parseInt(article.readTime);
    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
      articleWarnings.push('readTime fuera del rango esperado (1-60 min)');
    }
  }
  
  // Validar ID único
  const duplicateIds = articlesData.filter(a => a.id === article.id);
  if (duplicateIds.length > 1) {
    articleErrors.push(`ID duplicado: ${article.id}`);
  }
  
  // Mostrar resultados del artículo
  if (articleErrors.length > 0) {
    console.log(`  ❌ Errores (${articleErrors.length}):`);
    articleErrors.forEach(error => console.log(`    - ${error}`));
    errors += articleErrors.length;
  }
  
  if (articleWarnings.length > 0) {
    console.log(`  ⚠️  Advertencias (${articleWarnings.length}):`);
    articleWarnings.forEach(warning => console.log(`    - ${warning}`));
    warnings += articleWarnings.length;
  }
  
  if (articleErrors.length === 0 && articleWarnings.length === 0) {
    console.log(`  ✅ Artículo válido`);
  }
  
  console.log(''); // Línea en blanco
});

// Validaciones globales
console.log('🔍 Validaciones globales...\n');

// Verificar unicidad de títulos
const titles = articlesData.map(a => a.title.toLowerCase());
const duplicateTitles = titles.filter((title, index) => titles.indexOf(title) !== index);
if (duplicateTitles.length > 0) {
  console.log(`❌ Títulos duplicados encontrados: ${duplicateTitles.join(', ')}`);
  errors++;
}

// Verificar distribución de fechas
const dates = articlesData.map(a => new Date(a.date)).sort((a, b) => b - a);
const oldestDate = dates[dates.length - 1];
const newestDate = dates[0];
const daysDiff = (newestDate - oldestDate) / (1000 * 60 * 60 * 24);

if (daysDiff > 365) {
  console.log(`⚠️  Artículos con rango de fechas muy amplio (${Math.round(daysDiff)} días)`);
  warnings++;
}

// Verificar consistencia de autor
const authors = [...new Set(articlesData.map(a => a.author))];
if (authors.length > 1) {
  console.log(`⚠️  Múltiples autores encontrados: ${authors.join(', ')}`);
  warnings++;
}

// Análisis de tags
const allTags = articlesData.flatMap(a => a.tags);
const uniqueTags = [...new Set(allTags)];
const tagFrequency = {};

allTags.forEach(tag => {
  tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
});

const lowUsageTags = uniqueTags.filter(tag => tagFrequency[tag] === 1);
if (lowUsageTags.length > uniqueTags.length * 0.7) {
  console.log(`⚠️  Muchos tags con uso único (${lowUsageTags.length}/${uniqueTags.length})`);
  warnings++;
}

// Resumen final
console.log('📊 Resumen de validación:');
console.log(`  📄 Artículos validados: ${articlesData.length}`);
console.log(`  ❌ Total de errores: ${errors}`);
console.log(`  ⚠️  Total de advertencias: ${warnings}`);

if (errors > 0) {
  console.log('\n❌ Validación FALLIDA - Se encontraron errores críticos');
  process.exit(1);
} else if (warnings > 0) {
  console.log('\n⚠️  Validación COMPLETADA con advertencias');
  process.exit(0);
} else {
  console.log('\n✅ Validación EXITOSA - Todos los artículos son válidos');
  process.exit(0);
}
