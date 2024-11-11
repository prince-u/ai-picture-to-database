
export default function Form() {
  return (
    <>
    
    <form className="border-black border-2 w-min p-2">
      <label htmlFor="image-upload" className="text-left text-2xl font-semibold mb-2">Upload image</label>
        <input type="file" method="post" encType="multipart/form-data" id="image-upload" /><br/>
        <button type="submit" className="p-2 bg-primary rounded-sm mt-4 text-white">upload files</button>
    </form>
    </>
  )
}
