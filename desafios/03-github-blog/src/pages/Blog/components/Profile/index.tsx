import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import {
  GitLink,
  IconsContent,
  ProfileContainer,
  ProfileContent,
  ProfileTitle
} from './styles'

interface ProfileProps {
  name: string
  avatar_url: string
  login: string
  bio: string
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState<ProfileProps>({
    name: '',
    avatar_url: '',
    login: '',
    bio: '',
    followers: 0,
    html_url: ''
  })

  useEffect(() => {
    getDataProfile()
  }, [])

  async function getDataProfile() {
    try {
      const response = await axios.get(
        'https://api.github.com/users/edimilsonbraz'
      )
      const data = await response.data
      setUser(data)
      // console.log(user)
    } catch (error) {
      alert('Erro ao buscar dados do usuário' + error)
    }
  }

  return (
    <ProfileContainer className="container">
      <img src={user.avatar_url} alt="Foto Github" />

      <ProfileContent>
        <ProfileTitle>
          <h1>{user.name}</h1>
          <GitLink href={user.html_url} target="_blank">
            Github
            <FiExternalLink />
          </GitLink>
        </ProfileTitle>
        <p>{user.bio}</p>

        <IconsContent>
          <span>
            <FaGithub size={19} />
            {user.login}
          </span>
          <span>
            <FaBuilding size={19} />
            Rocketseat
          </span>
          <span>
            <FaUserFriends size={20} />
            {user.followers} seguidores
          </span>
        </IconsContent>
      </ProfileContent>
    </ProfileContainer>
  )
}
