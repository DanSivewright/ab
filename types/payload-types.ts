/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    pages: Page
    events: Event
    categories: Category
    media: Media
    "payload-preferences": PayloadPreference
    "payload-migrations": PayloadMigration
  }
  globals: {
    menu: Menu
  }
}
export interface User {
  id: string
  name?: string | null
  stripeCustomerId?: string | null
  isActive?: boolean | null
  subscriptionId?: string | null
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password: string | null
}
export interface Page {
  id: string
  slug?: string | null
  title: string
  hero?:
    | (
        | {
            title: string
            body?:
              | {
                  [k: string]: unknown
                }[]
              | null
            links?:
              | {
                  link: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: "short-heading-hero"
          }
        | {
            title: string
            body?:
              | {
                  [k: string]: unknown
                }[]
              | null
            links?:
              | {
                  link: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            image: string | Media
            fullscreen?: boolean | null
            position?: string | null
            id?: string | null
            blockName?: string | null
            blockType: "image-hero"
          }
        | {
            title: string
            image?: string | Media | null
            id?: string | null
            blockName?: string | null
            blockType: "minimal"
          }
      )[]
    | null
  layout?:
    | (
        | {
            invertBackground?: boolean | null
            columns?:
              | {
                  size?: ("oneThird" | "half" | "twoThirds" | "full") | null
                  richText: {
                    [k: string]: unknown
                  }[]
                  enableLink?: boolean | null
                  link?: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: "content"
          }
        | {
            position?: ("default" | "fullscreen") | null
            ratio?: ("aspect-video" | "aspect-square" | "aspect-auto") | null
            media: string | Media
            id?: string | null
            blockName?: string | null
            blockType: "media-block"
          }
        | {
            invertBackground?: boolean | null
            richText: {
              [k: string]: unknown
            }[]
            links?:
              | {
                  link: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: "cta"
          }
        | {
            richText?:
              | {
                  [k: string]: unknown
                }[]
              | null
            populateBy?: ("collection" | "selection") | null
            relationTo?: "events" | null
            categories?: (string | Category)[] | null
            limit?: number | null
            selectedDocs?:
              | {
                  relationTo: "events"
                  value: string | Event
                }[]
              | null
            populatedDocs?:
              | {
                  relationTo: "events"
                  value: string | Event
                }[]
              | null
            populatedDocsTotal?: number | null
            renderAs?: ("grid" | "list" | "bento") | null
            id?: string | null
            blockName?: string | null
            blockType: "archive"
          }
        | {
            title: string
            body?:
              | {
                  [k: string]: unknown
                }[]
              | null
            links?:
              | {
                  link: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            image: string | Media
            fullscreen?: boolean | null
            position?: string | null
            id?: string | null
            blockName?: string | null
            blockType: "image-hero"
          }
        | {
            title: string
            body?:
              | {
                  [k: string]: unknown
                }[]
              | null
            links?:
              | {
                  link: {
                    type?: ("reference" | "custom") | null
                    newTab?: boolean | null
                    appearance?:
                      | (
                          | "secondary"
                          | "ghost"
                          | "link"
                          | "destructive"
                          | "default"
                        )
                      | null
                    size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                    reference?: {
                      relationTo: "pages"
                      value: string | Page
                    } | null
                    url?: string | null
                    label: string
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: "short-heading-hero"
          }
        | {
            invertBackground?: boolean | null
            text: string
            position?: ("left" | "right") | null
            link: {
              type?: ("reference" | "custom") | null
              newTab?: boolean | null
              appearance?:
                | ("secondary" | "ghost" | "link" | "destructive" | "default")
                | null
              size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
              reference?: {
                relationTo: "pages"
                value: string | Page
              } | null
              url?: string | null
              label: string
            }
            id?: string | null
            blockName?: string | null
            blockType: "cta-text-block"
          }
        | {
            background: "EDEDED" | "C9DAF0" | "E08C5B" | "41BD62" | "FFF9D7"
            richText: {
              [k: string]: unknown
            }[]
            image: string | Media
            link: {
              type?: ("reference" | "custom") | null
              newTab?: boolean | null
              appearance?:
                | ("secondary" | "ghost" | "link" | "destructive" | "default")
                | null
              size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
              reference?: {
                relationTo: "pages"
                value: string | Page
              } | null
              url?: string | null
              label: string
            }
            id?: string | null
            blockName?: string | null
            blockType: "cta-image-block"
          }
      )[]
    | null
  updatedAt: string
  createdAt: string
}
export interface Media {
  id: string
  alt: string
  updatedAt: string
  createdAt: string
  url?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  sizes?: {
    card?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    portrait?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    square?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    feature?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
  }
}
export interface Category {
  id: string
  title?: string | null
  updatedAt: string
  createdAt: string
}
export interface Event {
  id: string
  slug?: string | null
  title: string
  details: {
    image?: string | Media | null
    date: string
    categories?: (string | Category)[] | null
  }
  content: {
    hero?:
      | (
          | {
              title: string
              body?:
                | {
                    [k: string]: unknown
                  }[]
                | null
              links?:
                | {
                    link: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              id?: string | null
              blockName?: string | null
              blockType: "short-heading-hero"
            }
          | {
              title: string
              body?:
                | {
                    [k: string]: unknown
                  }[]
                | null
              links?:
                | {
                    link: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              image: string | Media
              fullscreen?: boolean | null
              position?: string | null
              id?: string | null
              blockName?: string | null
              blockType: "image-hero"
            }
          | {
              title: string
              image?: string | Media | null
              id?: string | null
              blockName?: string | null
              blockType: "minimal"
            }
        )[]
      | null
    description?:
      | {
          [k: string]: unknown
        }[]
      | null
    layout?:
      | (
          | {
              invertBackground?: boolean | null
              columns?:
                | {
                    size?: ("oneThird" | "half" | "twoThirds" | "full") | null
                    richText: {
                      [k: string]: unknown
                    }[]
                    enableLink?: boolean | null
                    link?: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              id?: string | null
              blockName?: string | null
              blockType: "content"
            }
          | {
              position?: ("default" | "fullscreen") | null
              ratio?: ("aspect-video" | "aspect-square" | "aspect-auto") | null
              media: string | Media
              id?: string | null
              blockName?: string | null
              blockType: "media-block"
            }
          | {
              invertBackground?: boolean | null
              richText: {
                [k: string]: unknown
              }[]
              links?:
                | {
                    link: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              id?: string | null
              blockName?: string | null
              blockType: "cta"
            }
          | {
              richText?:
                | {
                    [k: string]: unknown
                  }[]
                | null
              populateBy?: ("collection" | "selection") | null
              relationTo?: "events" | null
              categories?: (string | Category)[] | null
              limit?: number | null
              selectedDocs?:
                | {
                    relationTo: "events"
                    value: string | Event
                  }[]
                | null
              populatedDocs?:
                | {
                    relationTo: "events"
                    value: string | Event
                  }[]
                | null
              populatedDocsTotal?: number | null
              renderAs?: ("grid" | "list" | "bento") | null
              id?: string | null
              blockName?: string | null
              blockType: "archive"
            }
          | {
              title: string
              body?:
                | {
                    [k: string]: unknown
                  }[]
                | null
              links?:
                | {
                    link: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              image: string | Media
              fullscreen?: boolean | null
              position?: string | null
              id?: string | null
              blockName?: string | null
              blockType: "image-hero"
            }
          | {
              title: string
              body?:
                | {
                    [k: string]: unknown
                  }[]
                | null
              links?:
                | {
                    link: {
                      type?: ("reference" | "custom") | null
                      newTab?: boolean | null
                      appearance?:
                        | (
                            | "secondary"
                            | "ghost"
                            | "link"
                            | "destructive"
                            | "default"
                          )
                        | null
                      size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                      reference?: {
                        relationTo: "pages"
                        value: string | Page
                      } | null
                      url?: string | null
                      label: string
                    }
                    id?: string | null
                  }[]
                | null
              id?: string | null
              blockName?: string | null
              blockType: "short-heading-hero"
            }
          | {
              invertBackground?: boolean | null
              text: string
              position?: ("left" | "right") | null
              link: {
                type?: ("reference" | "custom") | null
                newTab?: boolean | null
                appearance?:
                  | ("secondary" | "ghost" | "link" | "destructive" | "default")
                  | null
                size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                reference?: {
                  relationTo: "pages"
                  value: string | Page
                } | null
                url?: string | null
                label: string
              }
              id?: string | null
              blockName?: string | null
              blockType: "cta-text-block"
            }
          | {
              background: "EDEDED" | "C9DAF0" | "E08C5B" | "41BD62" | "FFF9D7"
              richText: {
                [k: string]: unknown
              }[]
              image: string | Media
              link: {
                type?: ("reference" | "custom") | null
                newTab?: boolean | null
                appearance?:
                  | ("secondary" | "ghost" | "link" | "destructive" | "default")
                  | null
                size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
                reference?: {
                  relationTo: "pages"
                  value: string | Page
                } | null
                url?: string | null
                label: string
              }
              id?: string | null
              blockName?: string | null
              blockType: "cta-image-block"
            }
        )[]
      | null
  }
  updatedAt: string
  createdAt: string
}
export interface PayloadPreference {
  id: string
  user: {
    relationTo: "users"
    value: string | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
export interface PayloadMigration {
  id: string
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
export interface Menu {
  id: string
  nav?:
    | {
        link: {
          type?: ("reference" | "custom") | null
          newTab?: boolean | null
          appearance?:
            | ("secondary" | "ghost" | "link" | "destructive" | "default")
            | null
          size?: ("xs" | "sm" | "default" | "lg" | "xl") | null
          reference?: {
            relationTo: "pages"
            value: string | Page
          } | null
          url?: string | null
          label: string
        }
        id?: string | null
      }[]
    | null
  updatedAt?: string | null
  createdAt?: string | null
}

export interface Collection {
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export interface Global {
  id: string
  updatedAt: string
  createdAt: string
  globalType: string
}

export interface Update {
  message: string
}
