import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const DocumentPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log("Router query:", router.query); // Debugging line
  console.log("Full slug:", slug); // Debugging line

  const documentSlug = Array.isArray(slug) ? slug[0] : slug;

  console.log("Processing slug:", documentSlug); // Debugging line

  if (!documentSlug) {
    return <div>Document not found</div>;
  }

  const filePath = path.join(process.cwd(), 'documents', `${documentSlug}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return <div>Document not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div>
      <h1>Document Page Loaded</h1> {/* Confirmation message */}
      <h1>{documentSlug.replace(/-/g, ' ')}</h1>
      <div dangerouslySetInnerHTML={{ __html: fileContent }} />
    </div>
  );
};

export default DocumentPage;
