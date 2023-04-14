export const getNumber = (value) => {
    return Number(value) || 0;
  };
export const calculatePriceTotal = (quantity, unit_price) => {
    return getNumber(quantity) * getNumber(unit_price) || 0;
  };
  
const getFixedNumber = (number) => {
    return Number(number).toFixed(2);
  };

const getQuantityPrice = (data) => {
  const total = calculatePriceTotal(data.price,data.quantity)
  return total
}
const getChangedProduct = (data,index) => {
  const total = getQuantityPrice(data[index])
  data[index].total = total;
  return data;
}
const updateSummary = (summary, productCategory,total)  => {
if(productCategory) {
  const updateSummaryIndex = summary.findIndex(item => item.area==productCategory)
  if (updateSummaryIndex !== -1) {
    summary[updateSummaryIndex].value = total;
  }
}
return summary
}
export const handleOnValueChange = (index,form,productKey,productCategory) => {
  const formsValue = form.getFieldsValue()
  const newFields = formsValue[productKey];
  const data = getChangedProduct(newFields['products'],index)
  newFields['total'] = getProductTotal(data,'total')
  newFields['totalAdvance'] = getProductTotal(data,'advanceAmount')
  newFields['products'] = data
  productCategory = data[0].processingArea || productCategory
  newFields['summary'] = updateSummary(formsValue.summary,productCategory, newFields.total)
  form.setFieldsValue({
    [productKey]: newFields
  })
  // const total =  calculatePriceTotal(newFields[index].quantity,newFields[index].price)
  // const updateData = {
  //   'total': total
  // }
  // setObjFields(newFields, index, updateData, setItemFields);
  // form.quatationProduct = newFields;

}

export const onSummaryValueChange = (form) => {
  const summary = form.getFieldsValue().summary
  const total = summary.reduce((prev,cur) => prev+ getNumber(cur.value),0)
  return total
} 
const setItemFields = (newFields, index, key, value) => {
  newFields[index][key] = getFixedNumber(value);
};


const setObjFields = (form, index, obj, fun) => {
  for (const [key, value] of Object.entries(obj)) {
    if (index !== undefined) {
      fun(form, index, key, value);
    } else {
      fun(form, key, value);
    }
  }
};



const getProductTotal = (product=[],key) => {
  const total = product.reduce((prev,current) =>prev+current[key],0)
  return total;
}


export const setFormData = (name,value,stateFun) => {
  stateFun((prevState) => ({
    ...prevState,
    [name]: value
  }))
}

export const getKeysValues = (obj) => {
  const keys = Object.keys(obj);
const key = keys[0];
const value = obj[key];
return {
  key,value
}
}

export const getListKeyValues = (list) => {
  const newList  = list.map(item =>{
    const obj = {}
    const {key,value} = getKeysValues(item)
    obj['key']= key
    obj['value']= value
    
    return obj
     

  } )
  return newList
}


//---------------------------------------------Pricing Table--------------------------------------------------
export const calculatePercentage = (currentVal) => {
  const gstAmount = (currentVal * 9)/100;
  return gstAmount ;
}
export const setPricingValue = (form) => {
  const formObj = form.getFieldsValue();
  formObj.total3 = getNumber(formObj.total2) +getNumber (formObj.packing)
  formObj.total4 = getNumber(formObj.total3) +getNumber (formObj.insurance)
  formObj.total2 = getNumber(formObj.total1) -getNumber (formObj.disc)
  formObj.total5 = getNumber(formObj.total4) +getNumber (formObj.installation)
  formObj.cgst = calculatePercentage(formObj.total5);
  formObj.total6 = formObj.total5 + formObj.cgst;
  formObj.sgst = calculatePercentage(formObj.total6);
  formObj.total7 = formObj.total6 + formObj.sgst;
  formObj.igst = calculatePercentage(formObj.total7);
  formObj.total8 = formObj.total7 + formObj.igst;
  formObj.total9 = formObj.total8 + formObj.transport;
  formObj.roff =  getFixedNumber(formObj.total9)
  form.setFieldsValue({
    ...formObj,
  });
};


export const calculateGSTValues = (key,val) => {
  switch (key) {
    case 'total5':
      const gstAmount = calculatePercentage(val)
      return {cgst:gstAmount, total6: getNumber(gstAmount) + getNumber(val)}
      break;
  
    default:
     return {}
  }
}
export  const calculatePricingValues = (val1,val2,operation) => {
  switch (operation) {
    case '+':
      return val1+val2;
      break;
    case '-':
      return val1-val2;
    case '%':
      return calculatePercentage(val1)
    default:
      break;
  }
}


export const setPricingTableData = (form) => {
  const formObj = form.getFieldsValue()
  const keys = Object.keys(formObj)
  for(let i=0;i<keys.length-1; i++){
    const key = keys[i];
    const key2 = keys[i+1]
    let operation='+';
    if (key==='disc') {
      operation = '-'
    }
    setPricingValue(formObj[key],formObj[key2],operation,key2,form)

  }
 
}
export const pricingInitialValue =  {"total1":0,"disc":0,"total2":0,"packing":0,"total3":0,"insurance":0,"total4":0,"installation":0,"total5":0,"cgst":0,"total6":0,"sgst":0,"total7":0,"igst":0,"total8":0,"transport":0,"total9":0,"roff":0}