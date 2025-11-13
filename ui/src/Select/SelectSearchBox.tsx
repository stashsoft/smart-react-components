import extractElementProps from '@smart-react-components/core/element-props'
import changeEvents, { ChangeEvents } from '@smart-react-components/core/element-props/change-events'
import focusEvents, { FocusEvents } from '@smart-react-components/core/element-props/focus-events'
import { IntrinsicStyledCoreProps } from '@smart-react-components/core/element-props/intrinsic-styled-core-props'
import intrinsicStyledFlexProps from '@smart-react-components/core/element-props/intrinsic-styled-flex-props'
import intrinsicStyledMarginProps from '@smart-react-components/core/element-props/intrinsic-styled-margin-props'
import intrinsicStyledSizeProps from '@smart-react-components/core/element-props/intrinsic-styled-size-props'
import keyboardEvents, { KeyboardEvents } from '@smart-react-components/core/element-props/keyboard-events'
import useChangeEffect from '@smart-react-components/core/hooks/useChangeEffect'
import { Theme } from '@smart-react-components/core/theme'
import { ContentElement, JSXChildren, JSXElementProps, PaletteProp, ResponsiveProp, SetState, ShapeProp, SizeProp } from '@smart-react-components/core/types'
import React from 'react'
import { useTheme } from 'styled-components'
import DropdownItemElement from '../components/Dropdown/DropdownItemElement'
import DropdownListElement from '../components/Dropdown/DropdownListElement'
import useSelectBoxHover from '../hooks/useSelectBoxHover'
import useSelectSearch from '../hooks/useSelectSearch'
import { getWaveEffectPalette } from '../util/wave-effect'
import Dropdown from '../Dropdown'
import Input from '../Input'

export interface Props extends
  Partial<ResponsiveProp<'size', SizeProp>>,
  IntrinsicStyledCoreProps,
  ChangeEvents,
  FocusEvents,
  KeyboardEvents {
  children: JSXChildren
  containerProps?: JSXElementProps
  dropdownProps?: JSXElementProps
  hasBorder?: boolean
  hasHover?: boolean
  hasWaveEffect?: boolean
  hasSpellCheck?: boolean
  inputProps?: JSXElementProps
  isBlock?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  isSoft?: boolean
  label?: ContentElement
  leftAddon?: ContentElement
  palette?: PaletteProp
  placeholder?: string
  rightAddon?: ContentElement
  setValue: SetState<string>
  shape?: ShapeProp
  template?: JSX.Element
  value: string
  waveEffectPalette?: PaletteProp
}

const SelectSearchBox = React.forwardRef<HTMLInputElement, Props>((props, forwardRef) => {
  const theme = useTheme() as Theme

  const [dropdownStatus, setDropdownStatus] = React.useState(false)

  const { optionList } = useSelectSearch({
    children: props.children,
    dropdownStatus,
    searchValue: props.value,
  })

  const { hovered, setHovered } = useSelectBoxHover({
    active: props.value,
    children: optionList,
    dropdownStatus,
    hasHover: props.hasHover,
    isDisabled: props.isDisabled,
    setActive: props.setValue,
    setDropdownStatus,
  })

  const waveEffectPalette = React.useMemo(() => getWaveEffectPalette(props, theme.$.vars.isDarkMode), [props.waveEffectPalette, props.palette, props.isOutline, props.isSoft, theme.$.vars.isDarkMode])

  useChangeEffect(() => {
    setHovered(undefined)
  }, [optionList])

  const handleOptionClick = value => {
    setDropdownStatus(false)
    props.setValue(value)
  }

  return (
    <Dropdown
      elementProps={props.dropdownProps}
      status={dropdownStatus}
      setStatus={setDropdownStatus}
    >
      <Input
        {...extractElementProps(props, [changeEvents, focusEvents, intrinsicStyledFlexProps, intrinsicStyledMarginProps, intrinsicStyledSizeProps, keyboardEvents])}
        containerProps={props.containerProps}
        hasBorder={props.hasBorder}
        hasSpellCheck={props.hasSpellCheck}
        inputProps={props.inputProps}
        isBlock={props.isBlock}
        isDisabled={props.isDisabled}
        isOutline={props.isOutline}
        isReadOnly={props.isReadOnly}
        isRequired={props.isRequired}
        isSoft={props.isSoft}
        label={props.label}
        leftAddon={props.leftAddon}
        palette={props.palette}
        placeholder={props.placeholder}
        ref={forwardRef}
        rightAddon={props.rightAddon}
        setValue={props.setValue}
        shape={props.shape}
        size={props.size}
        sizeSm={props.sizeSm}
        sizeMd={props.sizeMd}
        sizeLg={props.sizeLg}
        sizeXl={props.sizeXl}
        template={props.template}
        value={props.value}
      />
      <DropdownListElement
        dropdownListSize={props.size}
        dropdownListSizeSm={props.sizeSm}
        dropdownListSizeMd={props.sizeMd}
        dropdownListSizeLg={props.sizeLg}
        dropdownListSizeXl={props.sizeXl}
        isOutline={props.isOutline}
        isSoft={props.isSoft}
        palette={props.palette}
      >
        <DropdownItemElement
          hasHover={false}
          isActive={false}
          isHovered={false}
          isDisabled={false}
          isOutline={props.isOutline}
          isSoft={props.isSoft}
          palette={props.palette}
        >
          <Input
            containerProps={{
              displayMd: 'none',
            }}
            isOutline={props.isOutline}
            isSoft={props.isSoft}
            palette={props.palette}
            setValue={props.setValue}
            size={props.size}
            sizeSm={props.sizeSm}
            sizeMd={props.sizeMd}
            sizeLg={props.sizeLg}
            sizeXl={props.sizeXl}
            value={props.value}
          />
        </DropdownItemElement>
        { optionList.map((item, idx) => item && React.cloneElement(item, {
          key: item.key ?? idx,
          active: props.value,
          cursorKey: 'selectBox',
          hasHover: false,
          hasWaveEffect: props.hasWaveEffect,
          hovered,
          isEmbedded: false,
          isOutline: props.isOutline,
          isSoft: props.isSoft,
          palette: props.palette,
          setActive: handleOptionClick,
          setHovered: props.hasHover ? setHovered : null,
          waveEffectPalette,
          ...(props.isDisabled && { isDisabled: true }),
        })) }
      </DropdownListElement>
    </Dropdown>
  )
})

SelectSearchBox.defaultProps = {
  containerProps: {},
  dropdownProps: {},
  hasHover: true,
  hasWaveEffect: true,
  isOutline: true,
  palette: 'primary',
  size: 'medium',
}

export default SelectSearchBox
