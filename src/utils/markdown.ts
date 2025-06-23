export function extractFirstImageUrl(content: string): string | null {
  const htmlMatch = content.match(/<img[^>]+src="([^">]+)"/i)
  if (htmlMatch) return htmlMatch[1]

  const markdownMatch = content.match(/!\[.*?\]\((.*?)\)/)
  if (markdownMatch) return markdownMatch[1]

  return null
}

export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/#{1,6}\s*(.*)/g, '$1')
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

export function formatParagraphs(text: string): string {
  return text
    .split(/\n{2,}/g)
    .map((para) => `<p>${para.trim().replace(/\n/g, '<br />')}</p>`)
    .join('')
}
