const n = 5;
for (let i = n; i >= 0; i -= 1) {
  console.log(' '.repeat(i) + '*'.repeat(n - i));
}
