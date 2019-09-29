import View from './../lib/reducto/View';
import directory from './../../../assets/icons/directory.svg';

export default class FilesTableView extends View {
  constructor(el, store) {
    super(el, store);
  }

  render(state) {
    return state.filteredList
      .map(file => this._renderRow(file))
      .join('');
  }

  _renderRow(file) {
    return `
      <tr class="table__row table__row_border_bottom table__row_border_light files-table__row">
        <td class="files-table__name">
          <span class="with-icon with-icon_gap_md with-icon_align_center">
            <svg class="with-icon__icon with-icon__icon_position_left" width="12" height="20">
              <use xlink:href="${directory}" />
            </svg>
            ${file.name}
          </span>
        </td>
        <td class="files-table__hash"><a class="link" href="#">d53dsv</a></td>
        <td class="files-table__message">[vcs] move http to arc</td>
        <td class="files-table__author"><span class="username">noxoomo</span></td>
        <td class="files-table__updated">4 s ago</td>
        <td class="files-table__arrow">
          <a href="#">
            <svg width="10" height="19">
              <use href="../../assets/icons/navigate-arrow.svg" />
            </svg>
          </a>
        </td>
      </tr>  
    `

  }
}
