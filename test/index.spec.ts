import { it, expect } from "vitest";
import sanitizePersian from "../src";

it("sanitize persian text", () => {
    expect(
        sanitizePersian(
            " اين يك متن فارسی به همراه چند کاراکتر عربی است ؤ قرار است كة به فارسی تبدیل شود "
        )
    ).toEqual(
        "این یک متن فارسی به همراه چند کاراکتر عربی است و قرار است که به فارسی تبدیل شود"
    );
});

it("sanitize without trim", () => {
    expect(
        sanitizePersian(
            " اين متن قرار است كة به فارسی تبدیل شود ولی trim نشود ",
            { trim: false }
        )
    ).toEqual(" این متن قرار است که به فارسی تبدیل شود ولی trim نشود ");
});

it("sanitize numbers to english", () => {
    expect(
        sanitizePersian(
            " اين متن شامل اعداد عربی نظیر ٥ ٦ و اعداد فارسی نظیر ۵ ۶ است كة به انگلیسی تبدیل می‌شود "
        )
    ).toEqual(
        "این متن شامل اعداد عربی نظیر 5 6 و اعداد فارسی نظیر 5 6 است که به انگلیسی تبدیل می‌شود"
    );
});

it("sanitize numbers to persian", () => {
    expect(
        sanitizePersian(
            " اين متن شامل اعداد عربی نظیر ٥ ٦ و اعداد انگلیسی نظیر 5 6 است كة به فارسی تبدیل می‌شود ",
            { numbers: "toPersian" }
        )
    ).toEqual(
        "این متن شامل اعداد عربی نظیر ۵ ۶ و اعداد انگلیسی نظیر ۵ ۶ است که به فارسی تبدیل می‌شود"
    );
});

it("sanitize only texts and doest change numbers", () => {
    expect(
        sanitizePersian(
            "متن شامل اعداد فارسی نظیر ۵ عربی نظیر ٥ و انگلیسی نظیر 5 است که بدون تغییر باقی می‌ماند",
            { numbers: false }
        )
    ).toEqual(
        "متن شامل اعداد فارسی نظیر ۵ عربی نظیر ٥ و انگلیسی نظیر 5 است که بدون تغییر باقی می‌ماند"
    );
});
