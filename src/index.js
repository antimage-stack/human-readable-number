module.exports = function toReadable (number) {
    let str = String(number)
    
    let resultH
    let resultD
    let resultN
    let resultDD

    let arr = str.split('')
    
    if ( arr.length == 3 ) {
        switch (arr[0]) {
            case '1':
                resultH = 'one hundred'
                break;
            case '2': 
                resultH = 'two hundred'
                break;
            case '3':
                resultH = 'three hundred'
                break;
            case '4':
                resultH = 'four hundred'
                break;
            case '5':
                resultH = 'five hundred'
                break;
            case '6':
                resultH = 'six hundred'
                break;
            case '7':
                resultH = 'seven hundred'
                break;
            case '8':
                resultH = 'eight hundred'
                break;  
            case '9':
                resultH = 'nine hundred'
                break;  
        }
        switch (arr[1]) {
            case '1':
                switch(arr[1] + arr[2]){
                    case '19':
                        resultDD = ' nineteen'
                        break;
                    case '18':
                        resultDD = ' eighteen'
                        break;
                    case '17':
                        resultDD = ' seventeen'
                        break;
                    case '16':
                        resultDD = ' sixteen'
                        break;
                    case '15':
                        resultDD = ' fifteen'
                        break;
                    case '14':
                        resultDD = ' fourteen'
                        break;
                    case '13':
                        resultDD = ' thirteen'
                        break;
                    case '12':
                        resultDD = ' twelve'
                        break;
                    case '11':
                        resultDD = ' eleven'
                        break;
                    case '10':
                        resultDD = ' ten'
                        break;
                }
                break;
            case '9': 
                resultDD = ' ninety'
                break;
            case '8': 
                resultDD = ' eighty'
                break;
            case '7': 
                resultDD = ' seventy'
                break;
            case '6': 
                resultDD = ' sixty'
                break;
            case '5': 
                resultDD = ' fifty'
                break;
            case '4': 
                resultDD = ' forty'
                break;
            case '3': 
                resultDD = ' thirty'
                break;
            case '2':
                resultDD = ' twenty'
                break;
            case '0':
                resultDD = ''
                break;
        }
        if ( arr[1] === '1') {
            resultN = ''
        }
        else {
            switch (arr[2]) {
                case '0':
                    resultN = ''
                    break;
                case '1':
                    resultN = ' one'
                    break;
                case '2':
                    resultN = ' two'
                    break;
                case '3':
                    resultN = ' three'
                    break;
                case '4':
                    resultN = ' four'
                    break;
                case '5':
                    resultN = ' five'
                    break;
                case '6':
                    resultN = ' six'
                    break;
                case '7':
                    resultN = ' seven'
                    break;
                case '8':
                    resultN = ' eight'
                    break;
                case '9':
                    resultN = ' nine'
                    break;
            }
        }
    }
    else {
        resultH = ''
    }

    if ( arr.length == 2 ) {
        resultDD = ''
        switch (arr[0]) {
            case '1':
                switch (arr[0] + arr[1]) {
                    case '19':
                        resultD = 'nineteen'
                        break;
                    case '18':
                        resultD = 'eighteen'
                        break;
                    case '17':
                        resultD = 'seventeen'
                        break;
                    case '16':
                        resultD = 'sixteen'
                        break;
                    case '15':
                        resultD = 'fifteen'
                        break;
                    case '14':
                        resultD = 'fourteen'
                        break;
                    case '13':
                        resultD = 'thirteen'
                        break;
                    case '12':
                        resultD = 'twelve'
                        break;
                    case '11':
                        resultD = 'eleven'
                        break;
                    case '10':
                        resultD = 'ten'
                        break;
                }
                break;
            case '9':
                resultD = 'ninety'
                break;
            case '8':
                resultD = 'eighty'
                break;
            case '7':
                resultD = 'seventy'
                break;
            case '6':
                resultD = 'sixty'
                break;
            case '5':
                resultD = 'fifty'
                break;
            case '4':
                resultD = 'forty'
                break;
            case '3':
                resultD = 'thirty'
                break;
            case '2':
                resultD = 'twenty'
                break;
        }
        if ( arr[0] === '1' ) {
            resultN = ''
        }
        else {
            switch (arr[1]) {
                case '1':
                    resultN = ' one'
                    break;
                case '2':
                    resultN = ' two'
                    break;
                case '3':
                    resultN = ' three'
                    break;
                case '4':
                    resultN = ' four'
                    break;
                case '5':
                    resultN = ' five'
                    break;
                case '6':
                    resultN = ' six'
                    break;
                case '7':
                    resultN = ' seven'
                    break;
                case '8':
                    resultN = ' eight'
                    break;
                case '9':
                    resultN = ' nine'
                    break;
                case '0':
                    resultN = ''
                    break;
            }
        }
    }
    else {
        resultD = ''
    }
    if ( arr.length == 1 ) {
        resultDD = ''
        switch (arr[0]) {
            case '0':
                resultN = 'zero'
                break;
            case '1':
                resultN = 'one'
                break;
            case '2':
                resultN = 'two'
                break;
            case '3':
                resultN = 'three'
                break;
            case '4':
                resultN = 'four'
                break;
            case '5':
                resultN = 'five'
                break;
            case '6':
                resultN = 'six'
                break;
            case '7':
                resultN = 'seven'
                break;
            case '8':
                resultN = 'eight'
                break;
            case '9':
                resultN = 'nine'
                break;
        }
    }

    return ( resultH + resultDD + resultD + resultN )
}
