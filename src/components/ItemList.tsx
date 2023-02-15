import firebaseApp from '@/lib/firebaseApp';
import { getFirestore, collection } from 'firebase/firestore';
import Link from 'next/link';
import { useCollection } from 'react-firebase-hooks/firestore';

const ItemListComponent = (props:{user:any, db:any}) => {

  const collRef = collection(props.db, `${props.user?.email}`)

  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), `${props.user?.email}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map((doc) => (
              <div key={doc.id} className="bg-slate-100 m-4 cursor-pointer p-4 rounded-lg shadow-lg border border-b-8 border-indigo-400">
               <Link href={doc.id}>
               {doc.data().title}
               </Link>
              </div>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

export default ItemListComponent