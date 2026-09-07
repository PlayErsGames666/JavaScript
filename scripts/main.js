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
        
    }

    let allOk = true;

    for (const testName in tests) {
        const func = tests[testName];
        
        if (typeof func !== 'function') {
            console.warn(`[SKIPPED]: ${testName} (скрипт не подключен)`);
            continue;
        }

        try {
            const result = func({ type: 'init' });

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