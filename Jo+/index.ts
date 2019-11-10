import { ShapeFactory } from "./ShapeFactory";

let shapeFactory = new ShapeFactory();

let shape1 = shapeFactory.getShape("circle");
shape1.draw();

let shape2 = shapeFactory.getShape("rectangle");
shape2.draw();

let shape3 = shapeFactory.getShape("square");
shape3.draw();
