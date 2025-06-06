import type { Meta } from '@storybook/react'
import { UserMessage, type UserMessageProps } from '.'

export default {
  title: 'components/Chat/UserMessage',
  component: UserMessage,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof UserMessage>

// Define stories with render functions
export const Default = () => {
  const props: UserMessageProps = {
    content: 'Hello, this is a sample user message.',
    initial: 'U',
  }
  return <UserMessage {...props} />
}

export const LongMessage = () => (
  <UserMessage
    content="This is a sample of a long message. Proposed schema changes for adding a chat function. Proposed schema changes for adding a chat function. Proposed schema changes for adding a chat function."
    initial="U"
  />
)

export const WithTimestamp = () => (
  <UserMessage
    content="Message with timestamp."
    initial="U"
    timestamp={new Date()}
  />
)

export const WithoutInitial = () => (
  <UserMessage content="Message without initial." timestamp={new Date()} />
)

export const WithImageAvatar = () => (
  <UserMessage
    content="Message with image avatar."
    avatarSrc="https://i.pravatar.cc/150?img=3"
    avatarAlt="User avatar"
    timestamp={new Date()}
  />
)
