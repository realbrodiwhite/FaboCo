import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const documentsDirectory = path.join(process.cwd(), 'documents');
        console.log('Documents Directory:', documentsDirectory); // Log the directory path
        const filenames = await fs.readdir(documentsDirectory);
        console.log('Filenames:', filenames); // Log the filenames

        const documents = await Promise.all(filenames.map(async (filename) => {
            const filePath = path.join(documentsDirectory, filename);
            console.log('Reading file:', filePath); // Log each file being read
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
