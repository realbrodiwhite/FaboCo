import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/').filter(Boolean);

  if (pathSegments[2] === 'all') {
    // Handle the /api/documents/all endpoint
    try {
      const documentsDirectory = path.join(process.cwd(), 'documents');
      const filenames = await fs.readdir(documentsDirectory);

      const documents = await Promise.all(filenames.map(async (filename) => {
        const filePath = path.join(documentsDirectory, filename);
        const content = await fs.readFile(filePath, 'utf-8');
        return {
          name: filename,
          content: content,
          lastUpdated: (await fs.stat(filePath)).mtime,
        };
      }));

      return NextResponse.json(documents);
    } catch (error) {
      console.error('Error reading documents:', error);
      return NextResponse.json({ error: 'Error reading documents' }, { status: 500 });
    }
  }

  const fileName = url.searchParams.get('file');

  if (!fileName) {
    return NextResponse.json({ error: 'File name is required' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'documents', fileName);
  try {
    await fs.access(filePath);
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const content = await fs.readFile(filePath, 'utf8');

  return NextResponse.json({ content });
}
