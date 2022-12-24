import { GitLink, IconsContent, ProfileContainer, ProfileContent, ProfileTitle } from './styles'
import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export function Profile() {
  return (
    <ProfileContainer className="container">
      <img src="https://avatars.githubusercontent.com/u/65040481?v=4" alt="" />

      <ProfileContent>
        <ProfileTitle>
          <h1>Edimilson Braz</h1>
          <GitLink href='https://github.com/edimilsonbraz'>
            Github
            <FiExternalLink />
          </GitLink>
        </ProfileTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <IconsContent>
          <span>
            <FaGithub width={24}/>
            edimilsonbraz
          </span>
          <span>
            <FaBuilding />
            Rocketseat
          </span>
          <span>
            <FaUserFriends />
            32 seguidores
          </span>
        </IconsContent>
      </ProfileContent>
    </ProfileContainer>
  )
}
