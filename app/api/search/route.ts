import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    // Use the documents directory
    const documentsDir = path.join(process.cwd(), 'documents');
    const files = await fs.readdir(documentsDir);

    const readFilePromises = files
      .filter(file => file.endsWith('.md'))
      .map(async (file) => {
        const content = await fs.readFile(path.join(documentsDir, file), 'utf8');
        const docName = file.replace('.md', '');
        const version = content.match(/Version: ([\d.]+)/)?.[1] || "1.0.0";
        const lastUpdated = content.match(/Last Updated: ([\d-]+)/)?.[1] || "Unknown";
        const kbMatches = content.match(/KB-\d{3}(-\d{2})?/g) || [];
        const uniqueKBRefs = Array.from(new Set(kbMatches));

        return {
          name: docName,
          content,
          kbRefs: uniqueKBRefs,
          version,
          lastUpdated,
          matches: query ? {
            title: file.toLowerCase().includes(query.toLowerCase()),
            content: content.toLowerCase().includes(query.toLowerCase())
          } : null
        };
      });

    const readFileResults = await Promise.all(readFilePromises);
    const filteredResults = readFileResults.filter(result => 
      !query || 
      result.content.toLowerCase().includes(query.toLowerCase()) || 
      result.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return NextResponse.json({ results: filteredResults });
  } catch (error) {
    console.error('Error searching documents:', error);
    return NextResponse.json({ error: 'Error searching documents' }, { status: 500 });
  }
}
