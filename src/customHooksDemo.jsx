import React from 'react';
import { useLocalStorage, useUpdateLogger } from './hooks';

export default function CustomHooksDemo() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);
  return (
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
  );
}
