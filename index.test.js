const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index');

describe('Band, Musician, and Song Models', () => {
    
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test('can create a Band', async () => {
    const band = await Band.create({ name: 'The Beatles', genre: 'Rock' });
    expect(band.name).toBe('The Beatles');
    expect(band.genre).toBe('Rock');
  });

  test('can create a Musician', async () => {
    const musician = await Musician.create({ name: 'John Lennon', instrument: 'Guitar' });
    expect(musician.name).toBe('John Lennon');
    expect(musician.instrument).toBe('Guitar');
  });

  test('can create a Song', async () => {
    const song = await Song.create({ title: 'Imagine', year: 1971, length: 183 });
    expect(song.title).toBe('Imagine');
    expect(song.year).toBe(1971);
    expect(song.length).toBe(183);
  });

  test('can update a Band', async () => {
    const band = await Band.create({ name: 'The Rolling Stones', genre: 'Rock' });
    await band.update({ name: 'The Rolling Stones Updated', genre: 'Rock and Roll' });
    expect(band.name).toBe('The Rolling Stones Updated');
    expect(band.genre).toBe('Rock and Roll');
  });

  test('can update a Musician', async () => {
    const musician = await Musician.create({ name: 'Paul McCartney', instrument: 'Bass' });
    await musician.update({ name: 'Paul McCartney Updated', instrument: 'Bass Guitar' });
    expect(musician.name).toBe('Paul McCartney Updated');
    expect(musician.instrument).toBe('Bass Guitar');
  });

  test('can update a Song', async () => {
    const song = await Song.create({ title: 'Hey Jude', year: 1968, length: 430 });
    await song.update({ title: 'Hey Jude Updated', year: 1969, length: 440 });
    expect(song.title).toBe('Hey Jude Updated');
    expect(song.year).toBe(1969);
    expect(song.length).toBe(440);
  });

  test('can delete a Band', async () => {
    const band = await Band.create({ name: 'Led Zeppelin', genre: 'Hard Rock' });
    await band.destroy();
    const deletedBand = await Band.findOne({ where: { name: 'Led Zeppelin' } });
    expect(deletedBand).toBeNull();
  });

  test('can delete a Musician', async () => {
    const musician = await Musician.create({ name: 'George Harrison', instrument: 'Guitar' });
    await musician.destroy();
    const deletedMusician = await Musician.findOne({ where: { name: 'George Harrison' } });
    expect(deletedMusician).toBeNull();
  });

  test('can delete a Song', async () => {
    const song = await Song.create({ title: 'Let It Be', year: 1970, length: 240 });
    await song.destroy();
    const deletedSong = await Song.findOne({ where: { title: 'Let It Be' } });
    expect(deletedSong).toBeNull();
  });
});
