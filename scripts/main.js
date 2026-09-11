function main() {
    console.log("-------------------------------------")
    console.log("Запуск приложения!!!")

    const tests = {
        "Check function loops": window.loops,
        "Check function switchDay": window.switchDay,
        "Check function booleanText": window.booleanText,
        "Check function dateHoursMinutes": window.dateHoursMinutes,
        "Check function breakCheck": window.breakCheck,
        "Check function labelStatement": window.labelStatementBreak,
        "Check function continueCheck": window.continueCheck,
        "Check function stringCheck": window.stringCheck,
        "Check function findStringCheck": window.findStringCheck,
        "Check funtion numberCheck": window.numberCheck,
        "Check function numberToString": window.numberToString,
        "Check function numberExpo": window.numberExponential,
        "Check function numberToFix": window.numberToFix,
        "Check function numberToPrecision": window.numberToPrecision,
        "Check function numberValueOf": window.numberValueOf,
        "Check function numberMethod": window.numberMethod,
        "Check function numberParseInt": window.numberParseInt,
        "Check function numberParseFloat": window.numberParseFloat,
        "Check function numberIs": window.numberIs,
        "Check function numberEpsilon": window.numberEpsilon,
        "Check function numberMaxValue": window.numberMaxValue,
        "Check function numberMinValue": window.numberMinValue,
        "Check function numberMinSafeInteger": window.numberMinSafeInteger,
        "Check function numberMaxSafeInteger": window.numberMaxSafeInteger,
        "Check function numberPositiveInfinity": window.numberPositiveInfinity,
        "Check function numberNegativeInfinity": window.numberNegativenfinity,
        "Check function numberNaN": window.numberNaN,
        "Check function numberBigInt": window.numberBigInt,
        "Check function sumALL": window.sumALL,
        "Check function multiplyAll": window.multiplyAll,
        "Check function getPositiveStats": window.getPositiveStats,
        "Check function getEvenStats": window.getEvenStats,
        "Check function getStats": window.getStats,
    }

    let allOk = true;

    for (const testName in tests) {
        const func = tests[testName];
        
        if (typeof func !== 'function') {
            console.warn(`[SKIPPED]: ${testName} (скрипт не подключен)`);
            continue;
        }

        try {
            let result = func({ type: 'init' }); //поменял с const на let чтобы изменять ебаную переменную

            if (typeof result === 'object' && result !== null ) { // Проверяю на то что этот тип объект и не должен быть нулём как ты
                let subTestsPassed = true; // Создал ещё одну переменную на проверку прогона

                console.groupCollapsed(`Поддетали для: ${testName}`);

                for (const subName in result) { // Создал цикл с условием что теперь result будет subName(даже здесь небинарные есть)
                    const subFunc = result[subName]; // Ещё одна хуйня которая не должна меняться потому что это сами подфункции

                    if (typeof subFunc === 'function') { // Создал условие на проверку что это блять фунция 
                        const subResult = subFunc(); // Наградил её переменной для проверку резултата запуска подфункций

                        if (subResult) {
                            console.log(`[SUCCESS]: ${testName} -> ${subName}`);
                        }
                        else {
                            console.error(`[ERROR]: ${testName} -> ${subName}`);
                        }

                        if (!subResult) { // Обратная хуйня ! для сокращения писанины
                            subTestsPassed = false;
                        }
                    }
                }
                
                console.groupEnd();

                result = subTestsPassed; // Проверём то как прошёл тест
            }

            if (result) {
                console.log(`[SUCCESS]: ${testName}`);
            } else {
                console.error(`[FAILED]: ${testName}`);
                allOk = false;
            }
        } catch (error) {
            console.error(`[ERROR in ${testName}]:`, error.message);
            allOk = false;
        }
    }

    console.log("-------------------------------------");
    if (allOk) {
        console.log("All task executed successfully!!!")
    }
    else {
        console.log("There are errors in execution!")
    }
}

main();