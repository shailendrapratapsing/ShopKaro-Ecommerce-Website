

export default function FormValidator(e) {
 let {name, value} = e.target
 switch (name) {
      case "name" :
      case "color" :  
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value.length < 3 || value.length > 50)
            return name + "Field Length must be 3-50 characters"
        else
        return ""
      case "size" :  
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value.length > 10)
            return name + "Field Length must be 10 characters"
        else
        return ""
      case "basePrice" :  
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value< 1)
            return  "Base Price must be greater than 0"
        else
        return ""
      case "discount" :  
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value <0 ||value > 100)
            return  "Discount must be between 0-100"
        else
        return ""
      case "stockQunatiy" :  
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value <0)
            return  "Stock Quantity must not be Negative"
        else
        return ""
      case "message" :
        if(!value || value.length === 0)
            return name + "Field is mandatory"
        else if (value.length < 50)
            return name + "Field Length must be 50 characters"
        else
        return ""
    default:
        return ""
 }
}
