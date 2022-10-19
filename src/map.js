import fs from "fs";

function main() {

    const old = [1, 2, 3, 4];

    const answer = {
        id: Math.max(...old.map(item => item.id)) + 1, // 매번 새로 부여해줘야 함~
        problemID,
        detail,
        createdAt: Date.now(),
        bookmark: false
    }

    console.log(answer);
}
main();