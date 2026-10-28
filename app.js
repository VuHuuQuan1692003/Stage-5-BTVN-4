
function getValidScores(scores) {
    return scores.filter((score) => {
        return (
            typeof score === "number" &&
            score >= 0 &&
            score <= 10
        );
    });
}

function averageScore(scores) {
    const validScores = getValidScores(scores);

    if (validScores.length === 0) {
        return 0;
    }

    const total = validScores.reduce((sum, score) => {
        return sum + score;
    }, 0);

    return total / validScores.length;
}

function topScores(scores, n) {
    if (typeof n !== "number" || n <= 0) {
        return [];
    }

    const validScores = getValidScores(scores);

    validScores.sort((a, b) => b - a);

    return validScores.slice(0, n);
}

function rankNames(names, scores) {
    const students = [];

    for (let i = 0; i < scores.length && i < names.length; i++) {
        const score = scores[i];

        if (
            typeof score !== "number" ||
            score < 0 ||
            score > 10
        ) {
            continue;
        }

        students.push({
            name: names[i],
            score: score,
            originalIndex: i
        });
    }

    students.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return a.originalIndex - b.originalIndex;
    });

    return students.map((student) => {
        return student.name;
    });
}

function countByGrade(scores) {
    const counts = [0, 0, 0, 0];
    const validScores = getValidScores(scores);

    for (let i = 0; i < validScores.length; i++) {
        const score = validScores[i];

        if (score >= 8) {
            counts[0]++;
        } else if (score >= 6.5) {
            counts[1]++;
        } else if (score >= 5) {
            counts[2]++;
        } else {
            counts[3]++;
        }
    }

    return counts;
}

const sampleNames = ["Nguyễn Văn An", "Trần Thu Hà", "Lê Minh Quân", "Phạm Ngọc Mai", "Đỗ Quốc Bảo", "Vũ Khánh Linh"];
const sampleScores = [8.5, 6, 9.5, 4.5, -1, 7];

console.log(getValidScores(sampleScores));
console.log(averageScore(sampleScores));
console.log(topScores(sampleScores, 3));
console.log(rankNames(sampleNames, sampleScores));
console.log(countByGrade(sampleScores));