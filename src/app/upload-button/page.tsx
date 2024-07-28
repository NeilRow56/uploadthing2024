"use client";

import { UploadButton } from "@/utils/uploadthing";
import Link from "next/link";
import { useState } from "react";

export default function UploadButtonPage() {
  const [images, setImages] = useState<{ fileUrl: string; fileKey: string }[]>(
    []
  );

  const title = images.length ? (
    <>
      <p>Upload Complete!</p>
      <div className="pt-2">{images.length} files</div>
    </>
  ) : null;

  const imgList = (
    <>
      {title}
      <ul>
        {images.map((image, index) => (
          <li key={index} className="mt-2">
            <Link href="\" target="_blank">
              {image.fileUrl}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          if (res) {
            setImages(res);
            const json = JSON.stringify(res);
            // Do something with the response
            console.log(json);
          }
          //alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}
