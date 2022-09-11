import indicatorLives from "../indicator";

test.each([
    [{name: 'Маг', health: 90}, "healthy"],
    [{name: 'Воин', health: 50}, "wounded"],
    [{name: 'Лекарь', health: 15}, "critical"],
])(
    (`should determine what state the %s is in with %i health`),
    (hero, expected) => {
        const result = indicatorLives(hero);

        expect(result).toBe(expected);
    }
)
