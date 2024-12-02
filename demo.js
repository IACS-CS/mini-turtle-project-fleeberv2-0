export const runDemo = async (turtle, ti) => {
  const drawSquare = async (size) => {
    for (let i = 0; i < 4; i++) {
      await turtle.forward(size);
      await turtle.right(90);
    }
  };

  const drawColonFollowedByThree = async (size) => {
    await turtle.left(180);
    await turtle.arc(100, 180, false);
    await turtle.left(180);
    await turtle.arc(100, 180, false);
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(100);
    await turtle.left(90);
    await turtle.forward(100);
    await turtle.setLineWidth(10);
    await turtle.penDown();
    await turtle.forward(10);
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(200);
    await turtle.penDown();
    await turtle.right(90);
    await turtle.forward(10);
    await turtle.penUp();
  };

  let keepDrawing = true;

  while (keepDrawing) {
    let size = await ti.promptNumber("How big a square? (type 0 to end)");
    if (size != 0) {
      await drawColonFollowedByThree(size);
    } else {
      keepDrawing = false;
    }
  }
};
