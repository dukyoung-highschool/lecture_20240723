const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const logout = require('../controller/logout')
const router = express.Router()
const searchUser = require('../controller/searchUser')
const userDetails = require('../controller/userDetails')

router.post('/register', registerUser) // 카카오톡 회원가입
router.post('/email', checkEmail) // 카카오톡 로그인 (회원존재체크)
router.post('/password', checkPassword) // 카카오톡 로그인 (비밀번호체크)
router.post('/search-user', searchUser) // 사용자검색
router.get('/user-details', userDetails) // 쿠키에 있는 토큰으로 사용자 상세정보 조회

// 로그아웃
router.get('/logout', logout)

module.exports = router