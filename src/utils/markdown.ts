export function extractFirstImageUrl(markdown: string): string | null {
  const match = markdown.match(/!\[.*?\]\((.*?)\)/)
  return match ? match[1] : null
}

export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
}

export function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, '')
}

export function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}
