describe("The recursive sound of chirping", function() {
  it("should chirp 3 times", function() {
    var chirps = chirp(3);
    expect(chirps.trim()).toBe("chirp chirp chirp");
  });
});