

export default function ImageValidators(e) {
  let files = e.target.files
  if(files.length === 0) 
    return "Pic  Field is mandatory"
if(files.length === 1){
    let file = files[0]
    if(file.size > 1048576)
        return "Pic Size is Too High. Please Upload an Image Upto 1 MB"
    else if (!(file.type === "image/png" ||file.type === "image/jpg" || file.type=== "image/jpeg" || file.type === "image/gif" ))
        return "Invalid Pic Format. Please Upload and Image of Type .png,.jpg,.jpeg,.gif"
    else 
    return ""
} else{
let errorMessage = []
Array.from(files).forEach((x,ind)=>{
    if(x.size > 1048576)
        errorMessage.push (`Pic ${ind +1} Size is Too High. Please Upload an Image Upto 1 MB`)
    else if (!(x.type === "image/png" ||x.type === "image/jpg" || x.type=== "image/jpeg" || x.type === "image/gif" ))
        errorMessage.push( `Invalid Pic${ind +1}Format. Please Upload and Image of Type .png,.jpg,.jpeg,.gif`)
})
return errorMessage.length === 0?"":errorMessage
}   
}
