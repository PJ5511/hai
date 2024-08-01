document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('wheelcanvas');
    const ctx = canvas.getContext('2d');
    const spinButton = document.getElementById('spinButton');

    const prizes = [
        { name: '當筆折扣1000元', probability: 0.25 },
        { name: '當筆95折優惠', probability: 0.75 },
        { name: '品牌周邊小物', probability: 33 },
        { name: '品牌精選首飾', probability: 33 },
        { name: '極透氣銀離子包臀內褲', probability: 33 }
    ];

    const prizeColors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A'];
    const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0);

    function drawWheel() {
        const numSegments = prizes.length;
        const angleStep = (2 * Math.PI) / numSegments;

        prizes.forEach((prize, index) => {
            const startAngle = index * angleStep;
            const endAngle = (index + 1) * angleStep;
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.arc(250, 250, 250, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = prizeColors[index % prizeColors.length];
            ctx.fill();
            ctx.save();

            ctx.translate(250 + Math.cos(startAngle + angleStep / 2) * 150, 250 + Math.sin(startAngle + angleStep / 2) * 150);
            ctx.rotate(startAngle + angleStep / 2 + Math.PI / 2);
            ctx.textAlign = 'center';
            ctx.fillStyle = 'black';
            ctx.font = '20px Arial';
            ctx.fillText(prize.name, 0, 0);
            ctx.restore();
        });
    }

    function spinWheel() {
        const randomValue = Math.random() * 100;
        if (randomValue <= 0.25) {
            window.location.href = 'result1.html'; // 當筆折扣1000元
        } else if (randomValue <= 1) {
            window.location.href = 'result2.html'; // 當筆95折優惠
        } else if (randomValue <= 34) {
            window.location.href = 'result4.html'; // 品牌周邊小物
        } else if (randomValue <= 67) {
            window.location.href = 'result5.html'; // 品牌精選首飾
        } else {
            window.location.href = 'result6.html'; // 極透氣銀離子包臀內褲
        }
    }

    drawWheel();

    spinButton.onclick = function() {
        spinWheel();
    };
});
