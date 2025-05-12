export function extractFirstImageUrl(markdown: string): string | null {
    const match = markdown.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : null;
}

export function stripMarkdown(markdown: string): string {
    return markdown
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1');
}
