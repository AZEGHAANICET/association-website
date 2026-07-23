import { Member } from './types';

export const members: Member[] = [
    {
        id: 'president',
        name: 'NGAHANE JASON',
        position: 'Président',
        photo: 'https://ui-avatars.com/api/?name=NGAHANE+JASON&size=128&background=1e293b&color=ffffff&bold=true',
        email: 'ngahane.jason@example.com',
        phone: '+237 6XX XXX XXX',
        social: {
            facebook: 'https://facebook.com/ngahane.jason',
            linkedin: 'https://linkedin.com/in/ngahane-jason'
        }
    },
    {
        id: 'vp',
        name: 'MBOCK ALFRED',
        position: 'Vice-président',
        photo: 'https://ui-avatars.com/api/?name=MBOCK+ALFRED&size=128&background=1e293b&color=ffffff&bold=true',
        email: 'mbock.alfred@example.com',
        phone: '+237 6XX XXX XXX',
        parentId: 'president'
    },
    {
        id: 'sg',
        name: 'NJENG',
        position: 'Secrétaire général',
        photo: 'https://ui-avatars.com/api/?name=NJENG&size=128&background=1e293b&color=ffffff&bold=true',
        email: 'njeng@example.com',
        phone: '+237 6XX XXX XXX',
        parentId: 'president'
    },
    {
        id: 'tresorier',
        name: 'DJIMELI DARISCA',
        position: 'Trésorière',
        photo: 'https://ui-avatars.com/api/?name=DJIMELI+DARISCA&size=128&background=1e293b&color=ffffff&bold=true',
        email: 'djimeli.darisca@example.com',
        phone: '+237 6XX XXX XXX',

        parentId: 'vp'
    },
    {
        id: 'sgadj',
        name: 'YOUGO',
        position: 'Secrétaire adjoint',
        photo: 'https://ui-avatars.com/api/?name=YOUGO&size=128&background=1e293b&color=ffffff&bold=true',
        email: 'yougo@example.com',
        phone: '+237 6XX XXX XXX',
        parentId: 'sg'
    }
];