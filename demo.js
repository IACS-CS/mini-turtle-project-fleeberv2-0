export const runDemo = async (turtle, ti) => {
  const drawSquare = async (size) => {
    for (let i = 0; i < 4; i++) {
      await turtle.forward(size);
      await turtle.right(90);
    }
  };

  const drawColonFollowedByThree = async (size) => {
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(20 * size);
    await turtle.left(90);
    await turtle.penDown();
    await turtle.left(180);
    await turtle.arc(10 * size, 180, false);
    await turtle.left(180);
    await turtle.arc(10 * size, 180, false);
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(10 * size);
    await turtle.left(90);
    await turtle.forward(10 * size);
    await turtle.setLineWidth(2 + size);
    await turtle.penDown();
    await turtle.forward(2 + size);
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(20 * size);
    await turtle.penDown();
    await turtle.right(90);
    await turtle.forward(2 + size);
    await turtle.penUp();
    await turtle.forward(10 * size);
    await turtle.right(90);
    await turtle.forward(10 * size);
    await turtle.right(90);
    await turtle.setLineWidth(3);
  };

  const drawBag = async (size) => {
    await turtle.penUp();
    await turtle.setLineWidth(3);
    await turtle.right(90);
    await turtle.forward(40 * size);
    await turtle.left(90);
    await turtle.forward(60 * size);
    await turtle.left(180);
    await turtle.penDown();
    await turtle.beginPath();
    await turtle.forward(120 * size);
    await turtle.right(90);
    await turtle.forward(80 * size);
    await turtle.right(90);
    await turtle.forward(120 * size);
    await turtle.right(135);
    for (let n = 0; n < 6; n++) {
      await makeZigZag(size);
    }
    await turtle.closePath();
    await turtle.fill();
    await turtle.penUp();
    await turtle.right(45);
    await turtle.forward(60 * size);
    await turtle.right(90);
    await turtle.forward(40 * size);
    await turtle.right(90);
  };

  const makeZigZag = async (size) => {
    // Distance found using pythagoras:
    // We know distance from top-left to top-right it 80
    // 80/12 to find one triangle
    // It's all 45 degrees, so Math.sqrt((20/3)**2 + (20/3)**2)
    // Simplify it out:
    let zigDistance = (20 * Math.sqrt(2)) / 3;
    await turtle.forward(zigDistance * size);
    await turtle.left(90);
    await turtle.forward(zigDistance * size);
    await turtle.right(90);
  };

  let keepDrawing = true;

  while (keepDrawing) {
    await turtle.setSpeed(0.5);
    let size = await ti.promptNumber(
      "How big should I draw the bag? (type 0 to end)"
    );
    let color = await ti.prompt(
      "What color should the bag be? (type black to end)"
    );
    let shouldIContinue =
      size != 0 &&
      !["black", "#000000", "000000", "000", "#000"].includes(
        color.toLowerCase()
      );
    if (shouldIContinue) {
      await turtle.setFillStyle(color);
      await drawBag(size);
      await drawColonFollowedByThree(size);
    } else {
      keepDrawing = false;
    }
  }
};
