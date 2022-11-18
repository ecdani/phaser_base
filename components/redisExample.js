import { createClient } from 'redis';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

async function RedisExample (props) {
  const data = props.data;
  return (<>
    <div className={`${styles.card} flex items-center`}>
      <div className="flex-none mr-8">
        <Image src="/redis-icon.svg" alt="Redis Logo" width={32} height={32} />
      </div>
      <div> 
          <h2>Proofs of Redis working:</h2>
          <p className="font-semibold text-slate-900"> Ping! <span className="font-medium">{data.ping}</span></p>
          <p className="font-semibold text-slate-900"> Hi! <span className="font-medium">{data.test}</span></p>
          <p className="font-semibold text-slate-900"> Counting visits:  <span className="font-medium">{data.visits}</span></p>
        </div>
    </div>
  </>)
}

RedisExample.getServerSideData = async () => {
  try {
    const client = createClient({ url: 'redis://redis:6379' });
    client.on('error', (err) => {
      console.log('Error occured while connecting or accessing redis server');
    });

    await client.connect();
    
    const ping = await client.ping();
    await client.set('test', 'Hello from redis!');
    const testValue = await client.get('test');

    let visits = 0;
    if (await client.exists('visits')) {
      visits = await client.get('visits')
      await client.set('visits', parseInt(visits) + 1)
    } else {
      client.set('visits', 0);
    }
    await client.quit();
    return {ping: ping, test: testValue, visits: visits}
  } catch (e) {
    console.error(e);
  }
}

export default RedisExample;