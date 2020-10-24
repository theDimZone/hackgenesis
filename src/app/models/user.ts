export class User {
    //public number: age;
    public preferred_deposit: number; // предпочтительная сумма вложения

    // factors are from 0 to 100 (in percents)
    public factor_risky: number; // рискованность
    public factor_diversification: number; // желание диверсифицироваться
    public factor_duration: number; // предпочтение на сроки вложения
    public factor_boomer: number; // насколько предпочтительны обще-известные бренды
    public factor_skill: number; // осведомленность в сфере инвестирования
    public factor_optimism: number; // оптимизм пользователя
    //something else... public number: factor_

    public passed_tests: string[] = []; // json названия тестов, которые прошел
}
