import { getChunkedDocsFromUploadedPDFs } from "~/services/pdf-loader";
import { embedAndStoreDocs } from "~/services/vector-store";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = [];
  for (const [_name, file] of formData) {
    files.push(file as File);
  }

  try {
    await saveOnPinecone(files);

    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error("Internal server error ", error);
    return NextResponse.json(
      {
        error: "Error: Something went wrong. Try again!",
      },
      {
        status: 500,
      },
    );
  }
}

const saveOnPinecone = async (files: File[]) => {
  try {  
    const docs = await getChunkedDocsFromUploadedPDFs(files);
    await embedAndStoreDocs(docs);
  } catch (error) {
    console.error("saveOnPinecone failed ", error);
  }
};
