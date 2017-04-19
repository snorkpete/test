describe("Main", () => {
  it('works', () => {
    expect(1).toEqual(1);
  });

  it('uses another class easily', () => {
    let m = new HelloWorld();
    expect(m.name).toEqual('hello');
  });

  it('picks up a third class easily', () => {
    expect(new Utility().helper()).toEqual(500);
  });
});