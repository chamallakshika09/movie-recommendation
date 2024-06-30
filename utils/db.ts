import weaviate, { WeaviateClient, dataType } from 'weaviate-client';
import moviesData from '@/data/movies.json';
import { Movie } from '@/types/movies';

let client: WeaviateClient | null = null;

export const getWeaviateClient = async () => {
  if (client) return client;
  try {
    client = await weaviate.connectToLocal();
  } catch (error) {
    console.error('Failed to connect to Weaviate:', error);
    throw new Error('Failed to connect to Weaviate');
  }

  return client;
};

export const initializeDB = async () => {
  client = await getWeaviateClient();

  try {
    await client.collections.create({
      name: 'Movie',
      properties: [
        {
          name: 'title',
          dataType: dataType.TEXT,
        },
        {
          name: 'genre',
          dataType: dataType.TEXT,
        },
        {
          name: 'description',
          dataType: dataType.TEXT,
        },
        {
          name: 'embedding',
          dataType: dataType.NUMBER_ARRAY,
        },
      ],
    });
  } catch (error) {
    if ((error as Error).message.includes('already exists')) {
      console.log('Schema already exists');
      return;
    } else {
      console.error('Failed to create schema:', error);
      throw new Error('Failed to create schema');
    }
  }

  try {
    const myCollection = client.collections.get('Movie');
    await myCollection.data.insertMany(moviesData);
  } catch (error) {
    console.error('Failed to prepopulate data:', error);
    throw new Error('Failed to prepopulate data');
  }
};

export const fetchMovies = async () => {
  client = await getWeaviateClient();

  try {
    const myCollection = client.collections.get('Movie');
    const result = await myCollection.query.fetchObjects();
    const fetchedMovies: Movie[] = result.objects.map((movie) => ({
      title: movie.properties.title as string,
      genre: movie.properties.genre as string,
      description: movie.properties.description as string,
      embedding: movie.properties.embedding as number[],
      uuid: movie.uuid,
    }));
    return fetchedMovies;
  } catch (error) {
    console.error('Failed to fetch movies', error);
    throw new Error('Failed to fetch data');
  }
};
