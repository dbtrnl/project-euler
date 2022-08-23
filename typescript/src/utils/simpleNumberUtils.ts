import { DigitMapObject, PiGeneratorEnum } from '../interfaces'

/**
 * Returns the result of N factorial (N!)
 *
 * ---
 * @param number Number N
 * @returns {Number} The result of N factorial
 *
 * ---
 * @example
 * factorial(5) = 120
 * factorial(12) = 479001600
 */
export function factorial(number: number): number {

  // Errors and edge cases
  if (number <= 0) throw new RangeError('Number should be greater than zero')
  if (number > 170) throw new RangeError('Number is too big, use factorialBigInt() instead')
  if (number === 1) return 1
  if (number === 2) return 2

  let result = 0

  for (let i = number; i > 1; i--) {
    if (i === number) result += i * (i - 1)
    else result *= i - 1
  }
  return result
}

/**
 * BigInt implementation of factorial function
 *
 * Returns the result of N factorial (N!)
 *
 * ---
 * @param {Number} number number N
 * @returns {BigInt} factorial of number N
 */
export function factorialBigInt(n: number): BigInt {
  let factorialIterator = BigInt(0)
  let result = BigInt(1)
  const inputNumber = BigInt(n)

  if (inputNumber === BigInt(1)) return BigInt(1)
  if (inputNumber === BigInt(2)) return BigInt(2)

  for (factorialIterator = inputNumber; factorialIterator > BigInt(1); factorialIterator--) {
    result *= factorialIterator
  }
  return result
}

/**
 * Function to calculate permutations of K elements in a pool of N elements.
 * Without repetition
 *
 * ---
 * @param {Number} n number N - The total pool of elements
 * @param {Number} k number K (must be greater or equal than N)
 * @returns {Number} the ammount of possible permutations
 */
export function permutationWithoutRepetition(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, the dividend will be 10 - 10! == 0, so it's disregarded
  if (n === k) return factorial(n)

  const result = factorial(n) / factorial(n - k)
  return result
}

// See
/**
 * Implementation of combination using only factorials:
 *
 * **n! / (n - k)! . k!**
 *
 * ---
 * @param {Number}} n number N - The total pool of elements
 * @param {Number}} k number K (must be greater or equal than N)
 * @returns {Number}} How many combinations of K in N
 */
export function combinationFactorial(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, there is only 1 possible way to pick K elements from N
  if (n === k) return 1

  const result = Math.floor(factorial(n) / (factorial(n - k) * factorial(k)))
  return result
}

/**
 * Implementation of combination using permutation:
 *
 * **Permutation(n,k) / k!**
 *
 * ---
 * @param {Number}} n number N - The total pool of elements
 * @param {Number}} k number K (must be greater or equal than N)
 * @returns {Number}} How many combinations of K in N
 */
export function combinationPermutation(n: number, k: number): number {
  if (n <= 0 || k <= 0) throw new RangeError('N and K must be positive integers')
  if (n < k) throw new RangeError('Number N should be equal or greater than K')

  // If n === k, there is only 1 possible way to pick K elements from N
  if (n === k) return 1

  // Using Math.floor to avoid floating point imprecision (when calculating C(30,2) for example)
  const result = Math.floor(permutationWithoutRepetition(n, k) / factorial(k))
  return result
}

/*
  An alternative to this function is to use template string:
  const length = `${number}`.length;

  (for floating point numbers, the dot is included in this count...)
*/
export function numberLength(number: number): number {
  const num = Math.abs(number)
  // const num = number
  const length = Math.ceil(Math.log10(num + 1))
  return length
}

/**
 * Finds if a number N is a palindrome
 *
 * ---
 * @param inputNumber number N
 * @returns {Boolean} If N is a palindrome
 *
 * ---
 * @example isNumberPalindrome(242) = true
 * @example isNumberPalindrome(2422) = false
 */
export function isNumberPalindrome(inputNumber: number): boolean {
  const number: string = inputNumber.toString()
  const inverseNum: string = inputNumber.toString().split('').reverse().join('')

  if (number === inverseNum) return true
  return false
}

/**
 * Checks if number N is a permutation of number M
 *
 * ---
 * @param m First number to compare
 * @param n Second number to compare
 * @returns {Boolean} true | false
 *
 * ---
 * @example isNumberPermutationOfAnother(2223, 2232) = true
 * @example isNumberPermutationOfAnother(2224, 2232) = false
 */
export function isNumberPermutationOfAnother(m: number, n: number): boolean {
  const firstNumArr = m.toString().split('')
  const secondNumArr = n.toString().split('')

  // Creating an ordered Set of every unique digit in each number
  const digitsOfFirstNum = new Set(firstNumArr.sort())
  const digitsOfSecondNum = new Set(secondNumArr.sort())

  // If number of unique digits from each number is different, returns false.
  if (digitsOfFirstNum.size !== digitsOfSecondNum.size) return false

  // { '6': 0, '9': 0 }
  const firstDigitMap: DigitMapObject = {}
  const secondDigitMap: DigitMapObject = {}

  digitsOfFirstNum.forEach((digit) => { firstDigitMap[digit] = 0 })
  digitsOfSecondNum.forEach((digit) => { secondDigitMap[digit] = 0 })

  firstNumArr.forEach((digit) => { firstDigitMap[digit] += 1 })
  secondNumArr.forEach((digit) => { secondDigitMap[digit] += 1 })

  // Creates number array with ocurrences of each sorted digit in M and N
  const firstNumDigitOcurrences: Array<number> = Object.values(firstDigitMap)
  const secondNumDigitOcurrences: Array<number> = Object.values(secondDigitMap)

  // Compares both arrays to see if each digit occurs the sa
  for (let i = 0; i <= firstNumDigitOcurrences.length; i++) {
    if (firstNumDigitOcurrences[i] !== secondNumDigitOcurrences[i]) return false
  }

  return true
}

// This algorithm has viritually the same performance as the HEAP ALGORITHM below
// Took ~2.5s for number 1234567890
// Taken from https://levelup.gitconnecten.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
export function findAllPermutationsOfString(string: string): Array<string> {

  if (string.length < 2) return [string]

  const permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    const remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (const permut of findAllPermutationsOfString(remainingChars)) {
      permutationsArray.push(char + permut)
    }
  }
  return permutationsArray
}

// Uses HEAP'S ALGORITHM
// Taken from https://stackoverflow.com/a/37580979/13289772
export function findAllPermutationsOfNumber(inputNumber: number): Set<number> {
  const inputNumberLength = numberLength(inputNumber)

  const numArray = inputNumber.toString().split('')
  const numbersMatrix = [numArray.slice()]

  const numArrayLength = numArray.length
  const zeroesArray = new Array(numArrayLength).fill(0)

  let iterator = 1
  let registerOne
  let registerTwo

  while (iterator < numArrayLength) {
    if (zeroesArray[iterator] < iterator) {
      registerOne = iterator % 2 && zeroesArray[iterator]
      registerTwo = numArray[iterator]

      numArray[iterator] = numArray[registerOne]
      numArray[registerOne] = registerTwo

      ++zeroesArray[iterator]
      iterator = 1

      numbersMatrix.push(numArray.slice())
    } else {
      zeroesArray[iterator] = 0
      ++iterator
    }
  }
  /*
    map() to assemble the numbers from digit arrays
    Then filter() numbers with length smaller than the inputNumber
    (e.g. 0010 when input is 1000)
   */
  const permutationsArray = numbersMatrix
    .map((digitArray) => { return parseInt(digitArray.join(''), 10) })
    .filter((number) => {
      if (numberLength(number) !== inputNumberLength) return false
      return true
    })
  return new Set(permutationsArray.sort())
}

/**
 * Returns all cyclic permutations of a number
 *
 * [Reference](https://mathworld.wolfram.com/CyclicPermutation.html)
 * @param inputNumber The input number
 */
export function findAllCyclicPermutationsOfNumber(inputNumber: number): Array<string> {
  let result: Array<string> = []

  // If number is negative, set a flag
  let isInputNumberNegative = false
  if (inputNumber < 0) isInputNumberNegative = true

  // Splitting the number
  const currentNum: Array<string> = inputNumber.toString().split('')

  // If number is negative, removes the negative sign from the string array
  if (isInputNumberNegative) currentNum.shift()
  const numLength = currentNum.length

  // Adding inputNumber to the final array
  result.push(currentNum.join(''))

  for (let i = 0; i < numLength - 1; i++) {
    const register = currentNum.pop()
    if (register) currentNum.unshift(register); result.push(currentNum.join(''))
  }

  // If inputNumber is negative, put back the negative sign on all numbers
  if (isInputNumberNegative) result = result.map((string) => `-${string}`)

  return result
}

/**
 * Function to find the recurring sequence in a given fraction
 *
 * See [Reference](https://www.geeksforgeeks.org/find-recurring-sequence-fraction/)
 *
 * ---
 * @example
 * findRecurringSequence(1, 3) = 3 // 1/3 = 0,3333...
 *
 * @param {Number} numerator Fraction numerator
 * @param {Number} denominator Fraction denominator
 * @returns {String} The recurring sequence (if any)
 */
export function findRecurringSequence(numerator: number, denominator: number): string {

  let result = ''
  if (numerator === denominator) return result

  const sequenceMap = new Map()
  sequenceMap.clear()

  // Find first remainder
  let remainder = numerator % denominator

  // Keep finding remainder until
  //  either remainder becomes 0 or repeats
  while ((remainder !== 0) && (!sequenceMap.has(remainder))) {
    // Store this remainder
    sequenceMap.set(remainder, result.length)

    // Multiply remainder with 10
    remainder *= 10

    // Append remainder / denominator to result
    const resPart = Math.floor(remainder / denominator)
    result += resPart.toString()

    // Update remainder
    remainder %= denominator
  }

  // If 1/10, remainder is zero... but 1 should be returned.

  if (remainder === 0) return ''
  else if (sequenceMap.has(remainder)) return result.substr(sequenceMap.get(remainder))
  else return ''
}

/**
 * Returns the sum of all numbers in a bigInt array
 * @param {bigint[]} inputArray
 * @returns The sum
 */
export function sumAllNumbersInBigIntArray(inputArray: bigint[]): bigint {
  let sum = BigInt(0)

  for (let i = 0; i <= inputArray.length - 1; i++) {
    sum += inputArray[i]
  }
  return sum
}

/**
 * Checks if a number N is **pandigital**
 *
 * --
 * Still TODO
 * @param num C
 * @returns
 */
export function isNumberPandigital(num: number): number {
  if (Number.isNaN(num)) throw new Error('This function requires a valid number!')

  const numberOfDigits = num.toString().split('').length
  return numberOfDigits
}

/**
 * Returns nth Fibonacci number, starting from zero.
 *
 * So, fib(1) = 0 (The first number in the Fibonacci Sequence)
 *
 * ---
 * Since apparently there's no consensus on whether the sequence starts with 0 or 1,
 * both functions are supplied here. See also https://stackoverflow.com/questions/1451170/in-the-fibonacci-sequence-is-fib0-0-or-1
 *
 * ---
 * @param {Number} nth N-th Fibonacci number desired
 * @returns {Number} The N-th Fibonacci sequence
 */
export function findNthFibonacciNumberStartingFromZero(nth: number): number {
  /*
    TO-DO find the max fib that can accurately be calculated without BigInt
    and add a guard clause
  */
  if (nth <= 0) throw new RangeError('Invalid number! Input should be > 0!')
  if (nth === 1) return 0
  const fibArray = [0, 1]
  const indexOfNthFibonacciNumber = nth - 1

  for (let i = 2; i <= nth; i++) {
    const currentNumber = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    fibArray.push(currentNumber)
  }
  return fibArray[indexOfNthFibonacciNumber]
}

export function piGenerator(nth: PiGeneratorEnum): bigint {
  let constant
  switch (nth) {
    case '100':
      constant = 120n; break
    case '1000':
      constant = 1020n; break
    case '10000':
      constant = 10020n; break
    case '100000':
      constant = 100020n; break
    case '1000000':
      constant = 1000020n; break
    default:
      constant = 20n
  }
  let i = 1n
  let x = 3n * (10n ** constant)
  let pi = x
  while (x > 0) {
    // eslint-disable-next-line no-mixed-operators
    x = x * i / ((i + 1n) * 4n)
    pi += x / (i + 2n)
    i += 2n
  }
  const result = BigInt(pi / (10n ** 20n))
  return result
}

/**
 * Source: https://www.math.utah.edu/~pa/math/pi.html
 */
export const firstOneHundredThousandDigitsOfPI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919561814675142691239748940907186494231961567945208095146550225231603881930142093762137855956638937787083039069792077346722182562599661501421503068038447734549202605414665925201497442850732518666002132434088190710486331734649651453905796268561005508106658796998163574736384052571459102897064140110971206280439039759515677157700420337869936007230558763176359421873125147120532928191826186125867321579198414848829164470609575270695722091756711672291098169091528017350671274858322287183520935396572512108357915136988209144421006751033467110314126711136990865851639831501970165151168517143765761835155650884909989859982387345528331635507647918535893226185489632132933089857064204675259070915481416549859461637180270981994309924488957571282890592323326097299712084433573265489382391193259746366730583604142813883032038249037589852437441702913276561809377344403070746921120191302033038019762110110044929321516084244485963766983895228684783123552658213144957685726243344189303968642624341077322697802807318915441101044682325271620105265227211166039666557309254711055785376346682065310989652691862056476931257058635662018558100729360659876486117910453348850346113657686753249441668039626579787718556084552965412665408530614344431858676975145661406800700237877659134401712749470420562230538994561314071127000407854733269939081454664645880797270826683063432858785698305235808933065757406795457163775254202114955761581400250126228594130216471550979259230990796547376125517656751357517829666454779174501129961489030463994713296210734043751895735961458901938971311179042978285647503203198691514028708085990480109412147221317947647772622414254854540332157185306142288137585043063321751829798662237172159160771669254748738986654949450114654062843366393790039769265672146385306736096571209180763832716641627488880078692560290228472104031721186082041900042296617119637792133757511495950156604963186294726547364252308177036751590673502350728354056704038674351362222477158915049530984448933309634087807693259939780541934144737744184263129860809988868741326047215695162396586457302163159819319516735381297416772947867242292465436680098067692823828068996400482435403701416314965897940924323789690706977942236250822168895738379862300159377647165122893578601588161755782973523344604281512627203734314653197777416031990665541876397929334419521541341899485444734567383162499341913181480927777103863877343177207545654532207770921201905166096280490926360197598828161332316663652861932668633606273567630354477628035045077723554710585954870279081435624014517180624643626794561275318134078330336254232783944975382437205835311477119926063813346776879695970309833913077109870408591337464144282277263465947047458784778720192771528073176790770715721344473060570073349243693113835049316312840425121925651798069411352801314701304781643788518529092854520116583934196562134914341595625865865570552690496520985803385072242648293972858478316305777756068887644624824685792603953527734803048029005876075825104747091643961362676044925627420420832085661190625454337213153595845068772460290161876679524061634252257719542916299193064553779914037340432875262888963995879475729174642635745525407909145135711136941091193932519107602082520261879853188770584297259167781314969900901921169717372784768472686084900337702424291651300500516832336435038951702989392233451722013812806965011784408745196012122859937162313017114448464090389064495444006198690754851602632750529834918740786680881833851022833450850486082503930213321971551843063545500766828294930413776552793975175461395398468339363830474611996653858153842056853386218672523340283087112328278921250771262946322956398989893582116745627010218356462201349671518819097303811980049734072396103685406643193950979019069963955245300545058068550195673022921913933918568034490398205955100226353536192041994745538593810234395544959778377902374216172711172364343543947822181852862408514006660443325888569867054315470696574745855033232334210730154594051655379068662733379958511562578432298827372319898757141595781119635833005940873068121602876496286744604774649159950549737425626901049037781986835938146574126804925648798556145372347867330390468838343634655379498641927056387293174872332083760112302991136793862708943879936201629515413371424892830722012690147546684765357616477379467520049075715552781965362132392640616013635815590742202020318727760527721900556148425551879253034351398442532234157623361064250639049750086562710953591946589751413103482276930624743536325691607815478181152843667957061108615331504452127473924544945423682886061340841486377670096120715124914043027253860764823634143346235189757664521641376796903149501910857598442391986291642193994907236234646844117394032659184044378051333894525742399508296591228508555821572503107125701266830240292952522011872676756220415420516184163484756516999811614101002996078386909291603028840026910414079288621507842451670908700069928212066041837180653556725253256753286129104248776182582976515795984703562226293486003415872298053498965022629174878820273420922224533985626476691490556284250391275771028402799806636582548892648802545661017296702664076559042909945681506526530537182941270336931378517860904070866711496558343434769338578171138645587367812301458768712660348913909562009939361031029161615288138437909904231747336394804575931493140529763475748119356709110137751721008031559024853090669203767192203322909433467685142214477379393751703443661991040337511173547191855046449026365512816228824462575916333039107225383742182140883508657391771509682887478265699599574490661758344137522397096834080053559849175417381883999446974867626551658276584835884531427756879002909517028352971634456212964043523117600665101241200659755851276178583829204197484423608007193045761893234922927965019875187212726750798125547095890455635792122103334669749923563025494780249011419521238281530911407907386025152274299581807247162591668545133312394804947079119153267343028244186041426363954800044800267049624820179289647669758318327131425170296923488962766844032326092752496035799646925650493681836090032380929345958897069536534940603402166544375589004563288225054525564056448246515187547119621844396582533754388569094113031509526179378002974120766514793942590298969594699556576121865619673378623625612521632086286922210327488921865436480229678070576561514463204692790682120738837781423356282360896320806822246801224826117718589638140918390367367222088832151375560037279839400415297002878307667094447456013455641725437090697939612257142989467154357846878861444581231459357198492252847160504922124247014121478057345510500801908699603302763478708108175450119307141223390866393833952942578690507643100638351983438934159613185434754649556978103829309716465143840700707360411237359984345225161050702705623526601276484830840761183013052793205427462865403603674532865105706587488225698157936789766974220575059683440869735020141020672358502007245225632651341055924019027421624843914035998953539459094407046912091409387001264560016237428802109276457931065792295524988727584610126483699989225695968
