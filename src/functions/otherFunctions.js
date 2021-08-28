import { fetchUser } from "./authFunctions"

export const onlyNumbers = (value) => {
    let numberValue = ''
    for (let i=0; i <= value.length; i++){
        const isNumber = ['0','1','2','3','4','5','6','7','8','9'].includes(value[i])
        if (isNumber){
            numberValue += value[i]
        }
    }
    return numberValue
}

export const commify = (value) => {
    value = value.toString()

    while (value[0] === '0'){
        value = value.substring(1)
    }
    var chars = onlyNumbers(value).split("").reverse()
    var withCommas = []
    for(var i = 1; i <= chars.length; i++ ){
        withCommas.push(chars[i-1])
        if(i%3===0 && i !== chars.length ){  
            withCommas.push(",")
        }
    }
    var val = withCommas.reverse().join("")
    return val
}

export const calcVsBudget = (price) => {
    return fetchUser()
        .then(user => {
            const budget = user.budget

            const vsBudgetValue = onlyNumbers(price) - budget

            if (vsBudgetValue > 0){
                return {
                    value: `+£${commify(vsBudgetValue)}`,
                    className: 'propertyCard__details__vsBudget__amount-red'
                }
            }else if (vsBudgetValue < 0){

                const vsBudget = commify(Math.abs(vsBudgetValue))

                return {
                    value: `-£${vsBudget}`,
                    className: 'propertyCard__details__vsBudget__amount-green'
                }
            }else{
                return {
                    value:  `£${vsBudgetValue}`,
                    className: ''
                }
            }
        })

}

export const calcDateDayDifference = (date) => {
    const today = new Date()
    const date2 = new Date(date)

    const differenceInTime = date2.getTime() - today.getTime()

    const differenceInDays = parseInt(differenceInTime / (1000*60*60*24))

    return differenceInDays
}
