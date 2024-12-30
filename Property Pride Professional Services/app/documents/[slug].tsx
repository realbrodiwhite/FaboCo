import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const DocumentPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is defined and is a string
  const documentSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!documentSlug) {
    return <div>Document not found</div>;
  }

  const filePath = path.join(process.cwd(), 'documents', `${documentSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div>
      <h1>{documentSlug.replace(/-/g, ' ')}</h1>
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </div>
  );
};

export default DocumentPage;
