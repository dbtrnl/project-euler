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
 * Source https://math.tools/numbers/pi/10000
 */
export const firstHundredDigitsOfPI = 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679n

/**
 * Source https://math.tools/numbers/pi/10000
 */
export const firstThousandDigitsOfPI = 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989n

/**
 * Source https://math.tools/numbers/pi/10000
 */
export const firstTenThousandDigitsOfPI = 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472156951623965864573021631598193195167353812974167729478672422924654366800980676928238280689964004824354037014163149658979409243237896907069779422362508221688957383798623001593776471651228935786015881617557829735233446042815126272037343146531977774160319906655418763979293344195215413418994854447345673831624993419131814809277771038638773431772075456545322077709212019051660962804909263601975988281613323166636528619326686336062735676303544776280350450777235547105859548702790814356240145171806246436267945612753181340783303362542327839449753824372058353114771199260638133467768796959703098339130771098704085913374641442822772634659470474587847787201927715280731767907707157213444730605700733492436931138350493163128404251219256517980694113528013147013047816437885185290928545201165839341965621349143415956258658655705526904965209858033850722426482939728584783163057777560688876446248246857926039535277348030480290058760758251047470916439613626760449256274204208320856611906254543372131535958450687724602901618766795240616342522577195429162991930645537799140373404328752628889639958794757291746426357455254079091451357111369410911939325191076020825202618798531887705842972591677813149699009019211697173727847684726860849003377024242916513005005168323364350389517029893922334517220138128069650117844087451960121228599371623130171144484640903890644954440061986907548516026327505298349187407866808818338510228334508504860825039302133219715518430635455007668282949304137765527939751754613953984683393638304746119966538581538420568533862186725233402830871123282789212507712629463229563989898935821167456270102183564622013496715188190973038119800497340723961036854066431939509790190699639552453005450580685501956730229219139339185680344903982059551002263535361920419947455385938102343955449597783779023742161727111723643435439478221818528624085140066604433258885698670543154706965747458550332323342107301545940516553790686627333799585115625784322988273723198987571415957811196358330059408730681216028764962867446047746491599505497374256269010490377819868359381465741268049256487985561453723478673303904688383436346553794986419270563872931748723320837601123029911367938627089438799362016295154133714248928307220126901475466847653576164773794675200490757155527819653621323926406160136358155907422020203187277605277219005561484255518792530343513984425322341576233610642506390497500865627109535919465897514131034822769306247435363256916078154781811528436679570611086153315044521274739245449454236828860613408414863776700961207151249140430272538607648236341433462351897576645216413767969031495019108575984423919862916421939949072362346468441173940326591840443780513338945257423995082965912285085558215725031071257012668302402929525220118726767562204154205161841634847565169998116141010029960783869092916030288400269104140792886215078424516709087000699282120660418371806535567252532567532861291042487761825829765157959847035622262934860034158722980534989650226291748788202734209222245339856264766914905562842503912757710284027998066365825488926488025456610172967026640765590429099456815065265305371829412703369313785178609040708667114965583434347693385781711386455873678123014587687126603489139095620099393610310291616152881384379099042317473363948045759314931405297634757481193567091101377517210080315590248530906692037671922033229094334676851422144773793937517034436619910403375111735471918550464490263655128162288244625759163330391072253837421821408835086573917715096828874782656995995744906617583441375223970968340800535598491754173818839994469748676265516582765848358845314277568790029095170283529716344562129640435231176006651012412006597558512761785838292041974844236080071930457618932349229279650198751872127267507981255470958904556357921221033346697499235630254947802490114195212382815309114079073860251522742995818072471625916685451333123948049470791191532673430282441860414263639548000448002670496248201792896476697583183271314251702969234889627668440323260927524960357996469256504936818360900323809293459588970695365349406034021665443755890045632882250545255640564482465151875471196218443965825337543885690941130315095261793780029741207665147939425902989695946995565761218656196733786236256125216320862869222103274889218654364802296780705765615144632046927906821207388377814233562823608963208068222468012248261177185896381409183903673672220888321513755600372798394004152970028783076670944474560134556417254370906979396122571429894671543578468788614445812314593571984922528471605049221242470141214780573455105008019086996033027634787081081754501193071412233908663938339529425786905076431006383519834389341596131854347546495569781038293097164651438407007073604112373599843452251610507027056235266012764848308407611830130527932054274628654036036745328651057065874882256981579367897669742205750596834408697350201410206723585020072452256326513410559240190274216248439140359989535394590944070469120914093870012645600162374288021092764579310657922955249887275846101264836999892256959688159205600101655256375678n

/**
 * Source: https://www.math.utah.edu/~pa/math/pi.html
 */
export const firstTenThousandDigitsOfPI2 = 3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919561814675142691239748940907186494231961567945208095146550225231603881930142093762137855956638937787083039069792077346722182562599661501421503068038447734549202605414665925201497442850732518666002132434088190710486331734649651453905796268561005508106658796998163574736384052571459102897064140110971206280439039759515677157700420337869936007230558763176359421873125147120532928191826186125867321579198414848829164470609575270695722091756711672291098169091528017350671274858322287183520935396572512108357915136988209144421006751033467110314126711136990865851639831501970165151168517143765761835155650884909989859982387345528331635507647918535893226185489632132933089857064204675259070915481416549859461637180270981994309924488957571282890592323326097299712084433573265489382391193259746366730583604142813883032038249037589852437441702913276561809377344403070746921120191302033038019762110110044929321516084244485963766983895228684783123552658213144957685726243344189303968642624341077322697802807318915441101044682325271620105265227211166039666557309254711055785376346682065310989652691862056476931257058635662018558100729360659876486117910453348850346113657686753249441668039626579787718556084552965412665408530614344431858676975145661406800700237877659134401712749470420562230538994561314071127000407854733269939081454664645880797270826683063432858785698305235808933065757406795457163775254202114955761581400250126228594130216471550979259230990796547376125517656751357517829666454779174501129961489030463994713296210734043751895735961458901938971311179042978285647503203198691514028708085990480109412147221317947647772622414254854540332157185306142288137585043063321751829798662237172159160771669254748738986654949450114654062843366393790039769265672146385306736096571209180763832716641627488880078692560290228472104031721186082041900042296617119637792133757511495950156604963186294726547364252308177036751590673502350728354056704038674351362222477158915049530984448933309634087807693259939780541934144737744184263129860809988868741326047215695162396586457302163159819319516735381297416772947867242292465436680098067692823828068996400482435403701416314965897940924323789690706977942236250822168895738379862300159377647165122893578601588161755782973523344604281512627203734314653197777416031990665541876397929334419521541341899485444734567383162499341913181480927777103863877343177207545654532207770921201905166096280490926360197598828161332316663652861932668633606273567630354477628035045077723554710585954870279081435624014517180624643626794561275318134078330336254232783944975382437205835311477119926063813346776879695970309833913077109870408591337464144282277263465947047458784778720192771528073176790770715721344473060570073349243693113835049316312840425121925651798069411352801314701304781643788518529092854520116583934196562134914341595625865865570552690496520985803385072242648293972858478316305777756068887644624824685792603953527734803048029005876075825104747091643961362676044925627420420832085661190625454337213153595845068772460290161876679524061634252257719542916299193064553779914037340432875262888963995879475729174642635745525407909145135711136941091193932519107602082520261879853188770584297259167781314969900901921169717372784768472686084900337702424291651300500516832336435038951702989392233451722013812806965011784408745196012122859937162313017114448464090389064495444006198690754851602632750529834918740786680881833851022833450850486082503930213321971551843063545500766828294930413776552793975175461395398468339363830474611996653858153842056853386218672523340283087112328278921250771262946322956398989893582116745627010218356462201349671518819097303811980049734072396103685406643193950979019069963955245300545058068550195673022921913933918568034490398205955100226353536192041994745538593810234395544959778377902374216172711172364343543947822181852862408514006660443325888569867054315470696574745855033232334210730154594051655379068662733379958511562578432298827372319898757141595781119635833005940873068121602876496286744604774649159950549737425626901049037781986835938146574126804925648798556145372347867330390468838343634655379498641927056387293174872332083760112302991136793862708943879936201629515413371424892830722012690147546684765357616477379467520049075715552781965362132392640616013635815590742202020318727760527721900556148425551879253034351398442532234157623361064250639049750086562710953591946589751413103482276930624743536325691607815478181152843667957061108615331504452127473924544945423682886061340841486377670096120715124914043027253860764823634143346235189757664521641376796903149501910857598442391986291642193994907236234646844117394032659184044378051333894525742399508296591228508555821572503107125701266830240292952522011872676756220415420516184163484756516999811614101002996078386909291603028840026910414079288621507842451670908700069928212066041837180653556725253256753286129104248776182582976515795984703562226293486003415872298053498965022629174878820273420922224533985626476691490556284250391275771028402799806636582548892648802545661017296702664076559042909945681506526530537182941270336931378517860904070866711496558343434769338578171138645587367812301458768712660348913909562009939361031029161615288138437909904231747336394804575931493140529763475748119356709110137751721008031559024853090669203767192203322909433467685142214477379393751703443661991040337511173547191855046449026365512816228824462575916333039107225383742182140883508657391771509682887478265699599574490661758344137522397096834080053559849175417381883999446974867626551658276584835884531427756879002909517028352971634456212964043523117600665101241200659755851276178583829204197484423608007193045761893234922927965019875187212726750798125547095890455635792122103334669749923563025494780249011419521238281530911407907386025152274299581807247162591668545133312394804947079119153267343028244186041426363954800044800267049624820179289647669758318327131425170296923488962766844032326092752496035799646925650493681836090032380929345958897069536534940603402166544375589004563288225054525564056448246515187547119621844396582533754388569094113031509526179378002974120766514793942590298969594699556576121865619673378623625612521632086286922210327488921865436480229678070576561514463204692790682120738837781423356282360896320806822246801224826117718589638140918390367367222088832151375560037279839400415297002878307667094447456013455641725437090697939612257142989467154357846878861444581231459357198492252847160504922124247014121478057345510500801908699603302763478708108175450119307141223390866393833952942578690507643100638351983438934159613185434754649556978103829309716465143840700707360411237359984345225161050702705623526601276484830840761183013052793205427462865403603674532865105706587488225698157936789766974220575059683440869735020141020672358502007245225632651341055924019027421624843914035998953539459094407046912091409387001264560016237428802109276457931065792295524988727584610126483699989225695968n
