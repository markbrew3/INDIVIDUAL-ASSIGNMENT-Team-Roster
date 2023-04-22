import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/memberData';
import TeamMemCard from '../components/TeamMemCard';
import { useAuth } from '../utils/context/authContext';

export default function TeamMemPage() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();
  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="text-center">Team Members</h1>
      <div className="d-flex flex-wrap">
        {members.map((mem) => <TeamMemCard key={mem.firebaseKey} memberObj={mem} onUpdate={getAllMembers} />)}
      </div>
    </>
  );
}
