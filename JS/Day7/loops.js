for (let i = 0; i < 100; i++) {
  if (i > 10 && i < 20) {
    continue;
  }
  //console.log(i);
}

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) continue;

  console.log("odd numbers", i);
}
