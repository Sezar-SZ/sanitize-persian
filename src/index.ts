function englishFarsiNumbers(str: string) {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

    const persian = str
        .replace(/[0-9]/g, (match) => persianNumbers[parseInt(match)])
        .replace(
            /[٠١٢٣٤٥٦٧٨٩]/g,
            (match) => persianNumbers[arabicNumbers.indexOf(match)]
        );

    const english = str
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (match) => `${persianNumbers.indexOf(match)}`)
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (match) => `${arabicNumbers.indexOf(match)}`);

    return { persian, english };
}

function arabicToPersian(text: string) {
    const alphabetMap = new Map([
        ["ك", "ک"],
        ["ي", "ی"],
        ["ٱ", "ا"],
        ["أ", "ا"],
        ["إ", "ا"],
        ["ة", "ه"],
        ["ؤ", "و"],
        ["ئ", "ی"],
    ]);

    const regex = new RegExp([...alphabetMap.keys()].join("|"), "g");

    return text.replace(regex, (match) => alphabetMap.get(match) || match);
}

interface Options {
    trim?: boolean;
    numbers?: "toEnglish" | "toPersian" | false;
}

export default function sanitizePersian(text: string, options: Options = {}) {
    const { trim = true, numbers = "toEnglish" } = options;

    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }

    let sanitizedPersianText = arabicToPersian(text);

    const sanitizedNumbers = englishFarsiNumbers(sanitizedPersianText);
    switch (numbers) {
        case "toEnglish":
            sanitizedPersianText = sanitizedNumbers.english;
            break;

        case "toPersian":
            sanitizedPersianText = sanitizedNumbers.persian;
            break;

        default:
            break;
    }

    if (trim) return sanitizedPersianText.trim();

    return sanitizedPersianText;
}
