import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";


type TFileUploadProps = {
    onFileSelect?: (file: File) => void;
};

const FileUpload = ({onFileSelect}: TFileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (selectedFile: File) => {
        if (!selectedFile) return;
        setFile(selectedFile);
        onFileSelect?.(selectedFile);
    }

    const removeFile = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
        onFileSelect?.(null);
    }


    return (
        <div className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light">
            <div className="text-center">
                <FiUploadCloud className="text-primary mx-auto mb-2" />
                <p className="text-xs">
                    Upload your Receipt Here
                </p>
            </div>
        </div>
    )
}

export default FileUpload;