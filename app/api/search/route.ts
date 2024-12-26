import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase();

    if (!query) {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }

    // Use the documents directory
    const documentsDir = path.join(process.cwd(), 'documents');
    const files = await fs.readdir(documentsDir);
    const results = [];

    for (const file of files) {
      if (file.endsWith('.md')) {
        const content = await fs.readFile(path.join(documentsDir, file), 'utf8');
        if (
          content.toLowerCase().includes(query) ||
          file.toLowerCase().includes(query)
        ) {
          const docName = file.replace('.md', '');
          const version = content.match(/Version: ([\d.]+)/)?.[1] || "1.0.0";
          const lastUpdated = content.match(/Last Updated: ([\d-]+)/)?.[1] || "Unknown";
          const kbMatches = content.match(/KB-\d{3}(-\d{2})?/g) || [];
          const uniqueKBRefs = Array.from(new Set(kbMatches));

          results.push({
            name: docName,
            content,
            kbRefs: uniqueKBRefs,
            version,
            lastUpdated,
            matches: {
              title: file.toLowerCase().includes(query),
              content: content.toLowerCase().includes(query)
            }
          });
        }
      }
    }

    console.log('Search results:', results); // Debug log
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error searching documents:', error);
    return NextResponse.json({ error: 'Error searching documents' }, { status: 500 });
  }
}
