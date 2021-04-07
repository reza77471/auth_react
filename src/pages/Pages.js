import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Pegawai from './Pegawai'
import Pelanggaran from './Pelanggaran'
import Siswa from './Siswa'
import Jurusan from './Jurusan'
import PelanggaranSiswa from './pelanggaran_siswa'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/siswa' component={Siswa} />
        <Route path='/jurusan' component={Jurusan}/>
        <Route path='/pelanggaran_siswa' component={PelanggaranSiswa}/>
    </Switch>
)

export default Pages